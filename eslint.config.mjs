export default [
    {
        ignores: ["node_modules/**"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": "@typescript-eslint/eslint-plugin",
        },
        rules: {
            quotes: ["error", "double"], // Enforce double quotes
        },
    },
];
