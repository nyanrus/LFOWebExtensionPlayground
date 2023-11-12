import { UserConfig, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import swc from "unplugin-swc";
import { resolve } from "path";
import fs from "fs";

const r = (rpath: string) => {
  return resolve(__dirname, rpath);
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  let json: UserConfig = {};
  json = {
    build: {
      emptyOutDir: false,
      sourcemap: true,
      reportCompressedSize: false,
      target: "esnext",
      minify: false,
      cssMinify: false,
      rollupOptions: {
        input: {
          content: r("./src/content/index.ts"),
        },
        output: {
          format: "es",
          entryFileNames: "[name].js",
        },
        plugins: [],
      },
    },
    plugins: [
      {
        name: "copyFiles",
        enforce: "pre",
        buildStart(options) {
          this.addWatchFile(r("src/injectContentScript.js"));
          if (!fs.existsSync(r("dist"))) fs.mkdirSync(r("dist"));
          fs.copyFileSync(r("./src/injectContentScript.js"), r("dist/injectContentScript.js"));
        },
      },
      vue(),
      swc.vite(),
      swc.rollup(),
    ],
  };
  return json;
});
