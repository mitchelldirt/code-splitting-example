import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

const input = {
  app: "./assets/app.js",
};

export default {
  input,
  output: {
    dir: "../../extensions/code-splitting-example/assets",
  },
  plugins: [
    commonjs(),
    copy({
      targets: [
        { src: "./assets/*.css", dest: "../../extensions/code-splitting-example/assets" },
        {
          src: "./blocks/*.liquid",
          dest: "../../extensions/code-splitting-example/blocks",
        },
      ],
    }),
  ],
};