module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                'sourceType': 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-used-vars': 'off',
        'array-callback-return': ['error', { checkForEach: true }],
        'no-promise-executor-return': ['error'],
        'no-unsafe-negation': ['error'],
        'valid-typeof': ["error", { "requireStringLiterals": true }],
        'logical-assignment-operators': ["error", "never"],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/no-unnecessary-condition': ['off']
    },
}
