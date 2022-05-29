# eslint-config-squonk
ESLint config used by Squonk front-end apps

## Installation

This assumes you are using `pnpm`.

1. Install package + peer dependencies:

```sh
pnpm dlx install-peerdeps -P --dev @squonk/eslint-config
```

This uses `pnpm` (`-P`) to install the peer dependencies from this package as dev dependencies.

2. Create (or modify) a `.eslintrc.js` (or `.eslintrc.js` if your `package.json` is to `"type": "module"`) file with the following:

```js
module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: ['@squonk/eslint-config'],
};
```

3. You will need to ensure your `tsconfig.json` `includes` the all files you wish to be linted to prevent errors. Ensure it has the following entry to format dotfiles too:

```json
"include": [
    ...,
    "**/.*.js", // Possibly not needed if you have `"type": "module"`
    "**/.*.cjs", // Required if using `"type": "module"`
    // etc.
  ]
```

## Development

### Release a new version

Use `standard-version` via

```sh
pnpm dlx standard-version -t "''"
git push --follow-tags origin main
```

<!-- TODO: Add: ### Examples  -->
