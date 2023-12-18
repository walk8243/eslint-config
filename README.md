# eslint-config-walk8243

walk8243のためのESLintのshareable configsを作る

## Usage

### Install

```bash
$ npm i @walk8243/eslint-config -D
$ npm i typescript @tsconfig/node18 @types/node -D
```

### Setting

#### package.json

Only a portion of the data is shown.

```json
{
  "scripts": {
    "build": "tsc",
    "lint": "eslint src/ --ext .ts",
    "lint:fix": "eslint src/ --ext .ts --fix"
  }
}
```

#### tsconfig.json

```json
{
	"extends": "@tsconfig/node18/tsconfig.json",
	"compilerOptions": {
		"outDir": "dist"
	},
	"include": ["src/**/*.ts"]
}
```

### Try it

```bash
$ npm run lint
```

#### .eslintrc.js

```js
module.exports = {
	extends: ['@walk8243'],
	ignorePatterns: ['dist'],
};
```

## Docs

### Shareable Configs

https://eslint.org/docs/latest/extend/shareable-configs

### ESLint Rules

https://eslint.org/docs/latest/rules/

### typescript-eslint Rules

https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
