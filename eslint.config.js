/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintMdx from "eslint-mdx";
import eslintImport from "eslint-plugin-import";
import mdx from "eslint-plugin-mdx";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
const __dirname = "/home/oliver/codetemp/im/squonk-frontend/libs/eslint-config"

const extensions = ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"];

const tsParserOptions = {
  parser: tsParser,
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};

// main eslint config that is used everywhere
export default [
  {
    files: extensions,
    languageOptions: {
      ...tsParserOptions,
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
      "@typescript-eslint/adjacent-overload-signatures": ["warn"],
      "@typescript-eslint/array-type": ["warn"],
      "@typescript-eslint/await-thenable": ["error"],
      "@typescript-eslint/ban-types": ["warn"],
      "@typescript-eslint/consistent-generic-constructors": ["warn"],
      "@typescript-eslint/consistent-indexed-object-style": ["warn"],
      "@typescript-eslint/consistent-type-assertions": ["warn", { assertionStyle: "as" }],
      "@typescript-eslint/consistent-type-exports": [
        "warn",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/default-param-last": ["error"],
      "@typescript-eslint/dot-notation": ["warn"],
      // "@typescript-eslint/explicit-function-return-type": ["warn"], // turn on eventually
      // "@typescript-eslint/explicit-module-boundary-types": ["warn"], // turn on eventually
      "@typescript-eslint/member-ordering": [
        "warn",
        { default: ["signature", "field", "constructor", "method"] },
      ],
      "@typescript-eslint/method-signature-style": ["warn"],
      "@typescript-eslint/no-array-constructor": ["warn"],
      "@typescript-eslint/no-base-to-string": ["warn"],
      "@typescript-eslint/no-confusing-void-expression": ["warn"],
      "@typescript-eslint/no-duplicate-enum-values": ["error"],
      "@typescript-eslint/no-empty-function": ["off"],
      "@typescript-eslint/no-empty-interface": ["warn"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-floating-promises": ["warn"],
      "@typescript-eslint/no-for-in-array": ["error"],
      "@typescript-eslint/no-implied-eval": ["error"],
      "@typescript-eslint/no-inferrable-types": ["warn"],
      "@typescript-eslint/no-invalid-this": ["error"],
      "@typescript-eslint/no-invalid-void-type": ["error"],
      "@typescript-eslint/no-loss-of-precision": ["warn"],
      "@typescript-eslint/no-meaningless-void-operator": ["warn"],
      "@typescript-eslint/no-misused-promises": ["warn"],
      "@typescript-eslint/no-mixed-enums": ["warn"],
      "@typescript-eslint/no-namespace": ["warn"],
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["warn"],
      "@typescript-eslint/no-non-null-asserted-optional-chain": ["warn"],
      "@typescript-eslint/no-non-null-assertion": ["warn"],
      "@typescript-eslint/no-redeclare": ["error"],
      "@typescript-eslint/no-redundant-type-constituents": ["warn"],
      "@typescript-eslint/no-throw-literal": ["warn"],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["warn"],
      "@typescript-eslint/no-unnecessary-condition": ["warn"],
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unnecessary-type-arguments": ["warn"],
      "@typescript-eslint/no-unnecessary-type-constraint": ["warn"],
      "@typescript-eslint/no-unsafe-argument": ["warn"],
      "@typescript-eslint/no-unsafe-assignment": ["warn"],
      "@typescript-eslint/no-unsafe-call": ["warn"],
      "@typescript-eslint/no-unsafe-declaration-merging": ["warn"],
      "@typescript-eslint/no-unsafe-enum-comparison": ["error"],
      "@typescript-eslint/no-unsafe-member-access": ["warn"],
      "@typescript-eslint/no-unsafe-return": ["warn"],
      "@typescript-eslint/no-unused-vars": ["off"],
      "@typescript-eslint/no-use-before-define": ["off"],
      "@typescript-eslint/no-useless-constructor": ["warn"],
      "@typescript-eslint/no-useless-empty-export": ["warn"],
      "@typescript-eslint/no-var-requires": ["off"],
      "@typescript-eslint/prefer-as-const": ["warn"],
      "@typescript-eslint/prefer-enum-initializers": ["error"],
      "@typescript-eslint/prefer-for-of": ["warn"],
      "@typescript-eslint/prefer-function-type": ["warn"],
      "@typescript-eslint/prefer-includes": ["warn"],
      "@typescript-eslint/prefer-literal-enum-member": ["warn"],
      "@typescript-eslint/prefer-nullish-coalescing": ["warn"],
      "@typescript-eslint/prefer-optional-chain": ["warn"],
      "@typescript-eslint/prefer-reduce-type-parameter": ["warn"],
      "@typescript-eslint/prefer-regexp-exec": ["warn"],
      "@typescript-eslint/prefer-return-this-type": ["warn"],
      "@typescript-eslint/prefer-string-starts-ends-with": ["warn"],
      "@typescript-eslint/prefer-ts-expect-error": ["error"],
      "@typescript-eslint/promise-function-async": ["warn"],
      "@typescript-eslint/require-array-sort-compare": ["warn"],
      "@typescript-eslint/require-await": ["warn"],
      "@typescript-eslint/restrict-plus-operands": ["warn"],
      "@typescript-eslint/restrict-template-expressions": ["warn"],
      "@typescript-eslint/return-await": ["warn"],
      "@typescript-eslint/sort-type-constituents": ["warn"],
      "@typescript-eslint/strict-boolean-expressions": ["warn"],
      "@typescript-eslint/unified-signatures": ["warn"],
    },
  },
  {
    files: extensions,
    languageOptions: {
      ...tsParserOptions,
    },
    rules: {
      ...js.configs.recommended.rules,
      yoda: ["warn", "never"],
      "yield-star-spacing": ["off"], // Handled by prettier
      "wrap-regex": ["warn"],
      "wrap-iife": ["warn", "inside"],
      "vars-on-top": ["warn"],
      "valid-typeof": ["error", { requireStringLiterals: true }],
      "use-isnan": ["error", { enforceForSwitchCase: true, enforceForIndexOf: true }],
      "template-tag-spacing": ["off"], // Handled by prettier
      "template-curly-spacing": ["off"], // Handled by prettier
      "symbol-description": ["warn"],
      "switch-colon-spacing": ["off"], // Handled by prettier
      "spaced-comment": ["off"], // Handled by prettier
      "space-unary-ops": ["off"], // Handled by prettier
      "space-infix-ops": ["off"], // Handled by prettier
      "space-in-parens": ["off"], // Handled by prettier
      "space-before-function-paren": ["off"], // Handled by prettier
      "space-before-blocks": ["off"], // Handled by prettier
      "sort-vars": ["warn", { ignoreCase: true }],
      // I like this but it would require a lot of refactoring
      // "sort-keys": ["warn", "asc", { caseSensitive: false, natural: true, minKeys: 2 }],
      "sort-imports": ["off"],
      "semi-style": ["off"],
      "semi-spacing": ["off"],
      semi: ["off"],
      "rest-spread-spacing": ["off"],
      "require-yield": ["error"],
      "require-unicode-regexp": ["warn"],
      "require-await": ["warn"],
      "require-atomic-updates": ["warn"],
      radix: ["warn", "always"],
      // "prefer-template": ["warn"], // Too many refactors
      "prefer-spread": ["warn"],
      "prefer-rest-params": ["warn"],
      "prefer-regex-literals": ["warn"],
      "prefer-promise-reject-errors": ["warn"],
      "prefer-object-spread": ["warn"],
      // "prefer-object-has-own": ["warn"], // Need to ensure this works in current/older browsers
      "prefer-exponentiation-operator": ["warn"],
      "prefer-const": ["warn"],
      "prefer-arrow-callback": ["warn"],
      // "operator-linebreak": ["warn", "before"], // I'd prefer this but it conflicts with prettier https://github.com/prettier/prettier/issues/3806
      "operator-assignment": ["warn"],
      "object-shorthand": ["warn"],
      "no-with": ["error"],
      "no-var": ["warn"],
      "no-useless-return": ["warn"],
      "no-useless-rename": ["warn"],
      "no-useless-escape": ["warn"],
      "no-useless-constructor": ["warn"],
      "no-useless-computed-key": ["warn"],
      "no-useless-catch": ["warn"],
      "no-useless-call": ["warn"],
      "no-useless-backreference": ["warn"],
      "no-unused-labels": ["warn"],
      "no-unused-vars": ["off"],
      "no-unsafe-optional-chaining": ["error"],
      "no-unsafe-negation": ["error"],
      "no-unsafe-finally": ["error"],
      "no-unreachable": ["error"],
      "no-unneeded-ternary": ["warn"],
      "no-unexpected-multiline": ["warn"],
      "no-throw-literal": ["warn"],
      "no-shadow-restricted-names": ["warn"],
      "no-sequences": ["warn"],
      "no-self-compare": ["warn"],
      "no-return-await": ["warn"],
      "no-return-assign": ["warn"],
      "no-proto": ["error"],
      "no-promise-executor-return": ["warn"],
      "no-octal-escape": ["warn"],
      "no-multi-str": ["warn"],
      "no-lonely-if": ["warn"],
      "no-label-var": ["warn"],
      "no-invalid-this": ["error"],
      "no-implied-eval": ["warn"],
      // "no-implicit-coercion": ["warn"], // requires a lot of refactors for !!
      "no-extra-label": ["warn"],
      "no-extend-native": ["warn"],
      "no-eval": ["warn"],
      "no-eq-null": ["warn"],
      "no-empty": ["off"],
      "no-else-return": ["warn"],
      "no-duplicate-imports": ["warn"],
      "no-constant-binary-expression": ["warn"],
      "no-console": ["off"],
      "no-array-constructor": ["warn"],
      "no-alert": ["warn"],
      "new-parens": ["warn"],
      "new-cap": ["warn"],
      "logical-assignment-operators": ["warn"],
      // "linebreak-style": ["warn", "unix"],
      "for-direction": ["warn"],
      eqeqeq: ["warn"],
      "dot-notation": ["warn"],
      "default-param-last": ["error"],
      "default-case-last": ["warn"],
      "default-case": ["warn"],
      curly: ["warn"],
      // "camelcase": ["warn"], // turn on eventually
      "array-callback-return": ["warn"],
    },
  },
  {
    files: extensions,
    languageOptions: {
      ...tsParserOptions,
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
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
    },
  },
  {
    files: extensions,
    languageOptions: {
      ...tsParserOptions,
    },
    plugins: {
      // prettier-ignore
      "import": eslintImport,
    },
    settings: {
      "import/parsers": {
        espree: [".js", ".cjs", ".mjs", ".jsx"],
        "@typescript-eslint/parser": [".ts"],
      },
    },
    rules: {
      "import/no-useless-path-segments": ["warn"],
      "import/no-self-import": ["warn"],
      "import/no-named-as-default": ["warn"],
      // "import/no-empty-named-blocks": ["error"],
      "import/no-duplicates": ["warn"],
      "import/no-deprecated": ["warn"],
      "import/newline-after-import": ["warn", { considerComments: true }],
      "import/export": ["error"],
      "import/consistent-type-specifier-style": ["warn"], // This seems to default to "prefer-inline"
    },
  },
  {
    files: extensions,
    languageOptions: {
      ...tsParserOptions,
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": ["warn"],
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: extensions,
    languageOptions: {
      ...tsParserOptions,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...react.configs["jsx-runtime"].rules,
      ...react.configs.recommended.rules,
      "react/void-dom-elements-no-children": ["warn"], // Is this handled by prettier or something else?
      "react/style-prop-object": ["warn"], // is this done by typescript?
      "react/sort-comp": ["warn"],
      "react/self-closing-comp": ["warn"],
      "react/require-render-return": ["error"],
      "react/prefer-read-only-props": ["off"], // only works with flow atm https://github.com/jsx-eslint/eslint-plugin-react/issues/3535
      "react/no-unsafe": ["error"],
      "react/no-unknown-property": ["error"],
      "react/no-unescaped-entities": ["warn"],
      "react/no-this-in-sfc": ["warn"],
      "react/no-string-refs": ["error"],
      "react/no-render-return-value": ["error"],
      // "react/no-object-type-as-default-prop": ["warn"], // Doesn't exist any more?
      "react/no-invalid-html-attribute": ["error"],
      // "react/no-find-dom-node": ["warn"], // Handled by react/no-deprecated?
      "react/no-direct-mutation-state": ["warn"],
      "react/no-deprecated": ["warn"],
      // "react/no-danger-with-children": ["warn"], // Handled by react/no-danger?
      "react/no-danger": ["warn"],
      "react/no-array-index-key": ["warn"],
      "react/jsx-wrap-multilines": ["off"], // Handled by prettier
      "react/jsx-uses-vars": ["warn"],
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: false,
          multiline: "ignore",
          locale: "auto",
        },
      ],
      "react/jsx-pascal-case": ["error", { allowNamespace: true, allowLeadingUnderscore: true }],
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }], // the option probably can be made more strict when ts types get updated
      "react/jsx-no-undef": ["error"],
      "react/jsx-no-target-blank": ["warn"],
      "react/jsx-no-script-url": ["error"],
      "react/jsx-no-leaked-render": ["warn"],
      "react/jsx-no-duplicate-props": ["warn"],
      "react/jsx-no-constructed-context-values": ["warn"],
      "react/jsx-no-comment-textnodes": ["error"],
      "react/jsx-key": ["error"],
      "react/jsx-handler-names": ["warn"],
      "react/jsx-fragments": ["warn"],
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never", propElementValues: "never" },
      ],
      "react/jsx-boolean-value": ["warn", "always"],
      "react/iframe-missing-sandbox": ["warn"],
      "react/hook-use-state": ["warn"],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
      ],
      "react/display-name": ["warn"],
      "react/destructuring-assignment": ["warn", "always"],
      "react/button-has-type": ["warn"],
      // "react/boolean-prop-naming": ["warn"], // too many refactors for now
      "react-hooks/rules-of-hooks": ["warn"],
      "react-hooks/exhaustive-deps": ["warn"],
    },
  },
  {
    files: ["**/*.mdx"],
    languageOptions: {
      parser: eslintMdx,
    },
    settings: {
      "mdx/code-blocks": true, // this won't work sadly
    },
    plugins: {
      mdx,
    },
    rules: {
      ...mdx.configs.base.rules,
    },
  },
];
