# eslint-config-squonk

ESLint config used by Squonk front-end apps

## Installation

This assumes you are using `pnpm`.

1. Install package + peer dependencies:

```sh
pnpm add -D eslint @squonk/eslint-config
```

2. Create (or modify) a `eslint.config.js` for your _flat_ eslint config file and merge the configs you need for the project:

```js
import config from "@squonk/eslint-config";

export default config.map((c) => ({ ...c, ignores: ["**/dist/**"] }));
```

Add any files and directories you wish to ignore since .eslintignore is removed for flat configs.

## Development

### Release a new version

Use `standard-version` via

```sh
pnpm dlx standard-version -t "''"
git push --follow-tags origin main

pnpm publish
```
