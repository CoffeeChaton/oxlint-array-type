// eslint-disable no-default-export
// @ts-check
import { FlatCompat } from "@eslint/eslintrc";
import pkg from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const { configs } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
    recommendedConfig: configs.recommended,
    allConfig: configs.all,
});

const FlatConfig = [
    ...compat.config({
        root: true,
        env: {
            browser: true,
            es2023: true,
            node: false,
        },
        ignorePatterns: [
            ".cache",
            ".oxlintrc.json",
            ".vscode",
            "biome.jsonc",
            "dist",
            "dist",
            "dprint.json",
            "eslint.config.js",
            "node_modules",
            "package-lock.json",
            "pnpm-lock.yaml",
            "yarn.lock",
        ],
        extends: [
            "plugin:@typescript-eslint/recommended-requiring-type-checking",
        ],
        globals: {
            "Atomics": "readonly",
            "SharedArrayBuffer": "readonly",
        },
        parser: "@typescript-eslint/parser",
        parserOptions: {
            projectService: true,
            tsconfigRootDir: __dirname,
            ecmaVersion: 2021,
            sourceType: "module",
            ecmaFeatures: {
                impliedStrict: true,
            },
        },
        plugins: [
            "@typescript-eslint/eslint-plugin",
            "import-x",
        ],
        rules: {
            "@typescript-eslint/adjacent-overload-signatures": "warn",
            "@typescript-eslint/array-type": "warn",
        },
        settings: {
            "import-x/resolver": "typescript",
            "import-x/extensions": [
                ".ts",
                ".js",
            ],
        },
    }),
];

export default FlatConfig;
