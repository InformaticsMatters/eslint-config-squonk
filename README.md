# eslint-config-squonk
ESLint config used by Squonk front-end apps

## Installation

This assumes you are using `pnpm`.

1. Install package:

```sh
pnpm add -D eslint @squonk/eslint-config
```

2. Create (or modify) a `.eslintrc.js` (or `.eslintrc.cjs` if your `package.json` is to `"type": "module"`) file with the following:

```js
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  extends: ["@squonk/eslint-config"],
};
```

3. You will need to ensure your `tsconfig.json` `includes` the all files you wish to be linted to prevent errors. Ensure it has the following entry to format dotfiles too:

```json
"include": [
    ...,
  ]
```

4. Install peer dependencies or (preferred) set `--resolve--resolve-plugins-relative-to="path/to/@squonk/eslint-config"` (may be a monorepo or the node-modules folder)

## Development

Releasing a new version:

1. Merge the PR created by `release-please`
2. From the repo run `pnpm publish`
