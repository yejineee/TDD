module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  env: {
    jest: true,
    es2020: true,
  },
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
  },
  parser: "babel-eslint",
};
