/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { UserConfig, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import * as fs from "fs";

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
      target: "es2022",
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
          ["src/injectContentScript.js", "./firefox_manifest.json"].forEach((v) => {
            this.addWatchFile(r(v));
          });

          if (!fs.existsSync(r("dist"))) fs.mkdirSync(r("dist"));
          fs.copyFileSync(r("./src/injectContentScript.js"), r("dist/injectContentScript.js"));
          fs.copyFileSync(r("./firefox_manifest.json"), r("dist/manifest.json"));
        },
      },
      vue(),
    ],
  };
  return json;
});
