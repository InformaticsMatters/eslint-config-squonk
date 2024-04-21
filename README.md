# eslint-config-squonk

ESLint config used by Squonk front-end apps

## Installation

This assumes you are using `pnpm`.

1. Install package:

```sh
pnpm add -D eslint @squonk/eslint-config
```

2. Create (or modify) a `eslint.config.js` for your _flat_ eslint config file and merge the configs you need for the project:

```js
import config from "@squonk/eslint-config";

export default config.map((c) => ({ ...c, ignores: ["**/dist/**"] }));
```

Add any files and directories you wish to ignore since .eslintignore is removed for flat configs.

4. Install peer dependencies or (preferred) set `--resolve--resolve-plugins-relative-to="path/to/@squonk/eslint-config"` (may be a monorepo or the node-modules folder)

## Development

Releasing a new version:

1. Merge the PR created by `release-please`
2. From the repo run `pnpm publish`
