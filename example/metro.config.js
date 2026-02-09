const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "..");

const config = getDefaultConfig(projectRoot);

// Watch files in the parent directory (your library)
config.watchFolders = [workspaceRoot];

// Let Metro know where to resolve packages
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

// Resolve react-native-expo-wheel-picker from parent src
config.resolver.extraNodeModules = {
  "react-native-expo-wheel-picker": path.resolve(workspaceRoot, "src"),
};

module.exports = config;
