import { build } from "esbuild";
import { HotReload } from "./hot-reload.mjs";

import sass from "./esbuild-sass.mjs"

const dev =  process.argv.pop() == "dev";
const input = dev ? "dev.js" : "prd.js";
const hreload = new HotReload(8080);


build({
    entryPoints: ["./src/main.tsx"],
    outfile: "./public/scripts/" + input,
    minify: !dev,
    sourcemap: dev,
    bundle: true,
    // splitting: true,
    jsxFactory: "preact.h",
    jsxFragment: "preact.Fragment",
    plugins: [sass],
    watch: {
        onRebuild(error, result) {
            if (error) {
                console.error('watch build failed:', error);
            }
            else {
                console.log(new Date().toUTCString(), result);
                hreload.dispatch();
            }
        }
    }
}).then((bundle, error) => {
    if (error) {
        throw new Error(error);
    }
    if (bundle && bundle.warnings && bundle.warnings.length > 0) {
        console.log(bundle);
    } else {
        console.log('[Bundled]:', new Date().toUTCString());
    }
});