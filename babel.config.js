module.exports = {
  plugins: [
    [
      // "@babel/plugin-transform-modules-commonjs",
      "module-resolver",
      {
        root: ["."]
      }
    ]
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
