import { build } from "esbuild";

build({
  entryPoints: ["./src/main.tsx"],
  platform: "browser",
  outdir: "./build/bundle.js",
  bundle: true,
  minify: true,
});
