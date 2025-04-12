// metro.config.js

const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const projectRoot = __dirname;

const config = {
  projectRoot,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);
