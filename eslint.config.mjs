import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
    {
        ignores: ["node_modules/**"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin,
        },
        rules: {
            quotes: ["error", "double"], // Enforce double quotes
        },
    },
];
