import { WebSocketServer } from "ws";

export class HotReload {
    /**
     * is hot-reload server running
     * @type {bool}
     */
    running = false

    /**
     * connected clients
     * @type {Record<string, WebSocket>}
     */
    clients = {}

    /**
     * @param {number} port 
     */
    constructor(port) {
        this.start(port);
    }

    /**
     * start hot-reload server
     * @param {number} port
     * @returns {void}
     */
    start(port) {
        if (this.running) return;

        const wss = new WebSocketServer({ port });
        console.log(`[HotReload]: started at ${port}`);

        wss.on('connection', ws => {
            ws.id = Date.now();
            this.clients[ws.id] = ws;

            ws.on('close', () => {
                delete this.clients[ws.id];
            });
        });

        this.running = true;
    }

    /**
     * dispatch reload command to every connected client
     */
    dispatch() {
        this.start();

        Object.keys(this.clients).forEach(id => {
            this.clients[id].send("reload")
        });
    }
}


