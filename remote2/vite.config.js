import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),
        federation({
            name: "remoteApp2",
            filename: "remoteEntry.js",
            exposes: {
                "./Remote2": "./src/App"
            },
            shared: ["react", "react-dom","react-router-dom"]
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false
    }
})
