import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {
      "no-cond-assign": "error",
      "no-constant-condition": "error",
    }
  }
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ),
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Основные правила ESLint
      "no-console": "warn",
      "no-unused-vars": "off", // Отключение в пользу typescript-eslint
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react-hooks/exhaustive-deps": "warn",
      
      // Правила форматирования
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: "es5",
          bracketSpacing: true,
          jsxBracketSameLine: false,
          arrowParens: "always",
          endOfLine: "crlf",
        },
      ],
    },
  },
];

export default eslintConfig;