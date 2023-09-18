import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        {
            name: "configure-response-headers",
            configureServer: (server) => {
                server.middlewares.use((_req, res, next) => {
                    res.setHeader(
                        "Cross-Origin-Embedder-Policy",
                        "require-corp"
                    );
                    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
                    next();
                });
            },
        },
        react(),
    ],

    //exclui a otimização das dependencias abaixo
    optimizeDeps: {
        exclude: ['@/ffmpeg/ffmpeg", "@ffmpeg/util'],
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
