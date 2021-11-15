import { createServer } from "http";
import { promises as fs } from "fs";
import { parse } from "path";

class HttpServer {
    constructor() {
        this.dev = process.argv.pop() == "dev";
        this.scriptFile = this.dev ? "dev" : "prod";
        this.handleRequest = this.handleRequest.bind(this);
    }

    /**
     * 
     * @param {String} html 
     * @param {import("http").OutgoingMessage} res 
     */
    sendHtml(html, res) {
        res.writeHead(200, { "Content-Type": "text/html" });

        html = readFileSync("public/app.html", "utf-8");
        html = html.replace("#script#.js", this.scriptFile + ".js");

        res.end(html);
    }

    /**
     * @param {string} data 
     * @param {import("http").OutgoingMessage} res 
     */
    sendJson(data, res) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(data));
    }

    /**
     * @param {string} path
     * @param {string} mime
     * @param {import("http").OutgoingMessage} res 
     */
    async sendFile(path, mime, res) {
        try {
            const read = await fs.readFile(path, "utf8");
            res.writeHead(200, { 'content-type': mime });
            res.end(read);
        } catch (ex) {
            res.writeHead(404, { 'content-type': 'text/plain' });
            res.end(ex.toString());
        }
    }

    /**
     * @param {import("http").IncomingMessage} req
     * @param {import("http").OutgoingMessage} res
     */
    async handleRequest(req, res) {
        const { base, ext } = parse(req.url);
        const { url } = req;

        // must be run from root directory
        const root = "public";

        if (url == "/") {
            return await this.sendFile(`${root}/index.html`, "text/html", res);
        }

        // TODO: prevent dictionary traversal
        switch (ext) {
            case ".css":
                return await this.sendFile(`${root}/scripts/${base}`, "text/css", res);

            case ".js":
                return await this.sendFile(`${root}/scripts/${base}`, "application/javascript", res);

            case ".map":
                return await this.sendFile(`${root}/scripts/${base}`, "application/javascript", res);

            default:
                res.writeHead(404, { 'content-type': 'text/plain' });
                res.end("invalid path");
        }
    }

    /**
     * @param {number} port
     */
    startHttpServer(port) {
        createServer(this.handleRequest).listen(port, () => {
            console.log("HTTP on", port);
        });
    }
}

(() => {
    const h = new HttpServer();
    if (h.dev) console.log("HTTP in DEV mode");
    h.startHttpServer(3500);
})();