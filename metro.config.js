// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
    const config = getDefaultConfig(__dirname);
  
    const { transformer, resolver } = config;
  
    config.transformer = {
      ...transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    };

    resolver.assetExts.push('glb', 'gltf', 'png', 'jpg')
    resolver.sourceExts.push('js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs', 'svg')
    
    config.resolver = {
      ...resolver,
      assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: resolver.sourceExts
    };
  
    return config;
  })();
