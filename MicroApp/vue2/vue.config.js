const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false, // 或者设置为 false 禁用 ESLint 检查
  outputDir: "vue2",
  transpileDependencies: true,
  publicPath: "/child/vue2/",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3002,
  },
});
