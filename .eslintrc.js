export default {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  "rules": {
    "vue/arrow-spacing": "warn",
    "vue/brace-style": "warn",
    "vue/camelcase": "warn",
    "vue/comma-dangle": "error",
    "vue/component-definition-name-casing": "warn",
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case"
    ],
    "vue/dot-location": "warn",
    "vue/eqeqeq": "warn",
    "vue/no-irregular-whitespace": "error",
    "vue/object-curly-spacing": "warn",
    "vue/script-indent": "warn"
  }
}
