import type { Linter } from 'eslint';

declare module '@walk8243/eslint-config' {
	const config: Linter.Config[];
	export default config;
} 
