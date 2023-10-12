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
    "@next/eslint-plugin-next"
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:@next/next/recommended",
    "plugin:@next/next/core-web-vitals"
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
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
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
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "no-console": "off",
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
    quotes: ["warn", "double", { allowTemplateLiterals: true }],
    "simple-import-sort/imports": [
      "warn",
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
    "simple-import-sort/exports": "warn",
    "unused-imports/no-unused-imports": "warn",
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
