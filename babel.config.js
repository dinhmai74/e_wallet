module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        cwd: "babelrc",
        root: ["."],
        extensions: [".tsx", ".ts", ".ios.js", ".android.js", ".js", ".json"],
        alias: {
          app: "./app",
          api: "./app/api",
          components: "./app/components",
          screens: "./app/screens",
          navigation: "./app/navigation",
          services: "./app/services",
          theme: "./app/theme",
          utils: "./app/utils",
          models: "./app/models",
          i18n: "./app/i18n",
        },
      },
    ],
  ],
}
