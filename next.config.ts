// next.config.js
const path = require("path");

module.exports = {
  webpack: (config: any) => {
    config.resolve.alias["@src"] = path.resolve(__dirname, "src");
    return config;
  },
};
