import legacy from "@vitejs/plugin-legacy";
import vituum from "vituum";
import posthtml from "@vituum/vite-plugin-posthtml";
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import { defineConfig, loadEnv } from "vite";

export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      port: env.VITE_PORT,
    },
    plugins: [
      // Vituum
      vituum(),
      posthtml({
        root: "./src",
      }),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      // Custom HMR
      {
        name: "custom-hmr",
        enforce: "post",
        handleHotUpdate({ file, server }) {
          if (file.endsWith(".html")) {
            server.ws.send({
              type: "full-reload",
              path: "*",
            });
          }
        },
      },
    ],
    build: {
      assetsDir: "assets",
      sourcemap: true,
      minify: true,
      emptyOutDir: true,
      cssCodeSplit: false,
      rollupOptions: {
        input: ["./src/pages/**/*.html"],
        output: {
          chunkFileNames: "assets/js/[name].js",
          entryFileNames: "assets/js/[name].js",
          assetFileNames: ({ name }) => {
            // to configure the asset filenames (for media files and stylesheets).
            // if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? "")) {
            //   return "assets/img/[name]-[hash].[ext]";
            // }
            if (/\.(ttf|woff|woff2)$/.test(name ?? "")) {
              return "assets/fonts/[name].[ext]";
            }
            if (/\.css$/.test(name ?? "")) {
              return "assets/css/[name].[ext]";
            }
            return "assets/[name]-[hash].[ext]";
          },
        },
      },
    },
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [
          sortMediaQueries({
            sort: "desktop-first",
          }),
          autoprefixer({}),
        ],
      },
    },
  };
});
