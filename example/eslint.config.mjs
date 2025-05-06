// @ts-check

import { defineConfig } from "eslint/config";
import myConfig from '@walk8243/eslint-config';

export default defineConfig([
	{
		files: ['**/*.ts'],
		extends: [myConfig],
	},
]);
