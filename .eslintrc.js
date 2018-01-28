module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],

  // add your custom rules here
  rules: {
    "comma-dangle": "off",
  },
  globals: {
    Vue: true
  }
}
