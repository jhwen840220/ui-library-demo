const { npm_lifecycle_event } = process.env;

const isESModule = npm_lifecycle_event === "build:es";
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isESModule ? false : "auto",
      },
    ],
    "@babel/preset-react",
  ],
  plugins: ["babel-plugin-styled-components"],
};
