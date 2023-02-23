module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
    ecmaVersion: latest,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    requireConfigFile: false
  },
};
