module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "prettier/prettier": "off",
    "no-var": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/jsx-key": "off",
  },
};
