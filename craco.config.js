// 一般是node环境读取配置文件
const path = require("path");
const CracoLessPlugin = require("craco-less");
// __dirname 是当前文件夹的绝对路径 E:\VSCode\React\airbnb
const resolve = (pathname) => path.resolve(__dirname, pathname);
module.exports = {
  webpack: {
    alias: {
      // 要求是绝对路径
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
