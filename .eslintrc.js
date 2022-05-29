module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "react-hooks",
    "unused-imports",
    "import",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "object-shorthand": "warn",
    "no-else-return": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/display-name": "warn",
    "react/prop-types": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "warn",
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "all",
        singleQuote: false,
        printWidth: 100,
        semi: true,
        arrowParens: "always",
        bracketSpacing: true,
        tabWidth: 2,
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // React comes first
          ["^react"],
          ["^\\u0000"],
          // Internal packages.
          ["^(@squonk)(/.*|$)"],
          ["^@?\\w"],
          // Side effect imports.
          // Parent imports. Put `..` last.
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-duplicates": "warn",
  },
};
