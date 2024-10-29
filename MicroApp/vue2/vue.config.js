const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
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
