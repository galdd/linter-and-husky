import pluginJs from "@eslint/js"; // Import the default ESLint JavaScript plugin
import tseslintPlugin from "@typescript-eslint/eslint-plugin"; // Import the TypeScript ESLint plugin
import tseslintParser from "@typescript-eslint/parser"; // Import the TypeScript ESLint parser
import eslintPluginImport from "eslint-plugin-import"; // Import the ESLint plugin for managing import/export syntax
import globals from "globals"; // Import global variables for browser environments

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Apply these rules to all JavaScript and TypeScript files
    languageOptions: {
      globals: globals.browser, // Use browser global variables
      parser: tseslintParser, // Use the TypeScript ESLint parser
      parserOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript version
        sourceType: "module", // Use ECMAScript modules
      },
    },
    plugins: {
      "@typescript-eslint": tseslintPlugin, // Add the TypeScript ESLint plugin
      "import": eslintPluginImport, // Add the import/export management plugin
    },
    rules: {
      // Disable the built-in no-unused-vars rule
      "no-unused-vars": "off",
      // Enable TypeScript-specific rule for no-unused-vars
      "@typescript-eslint/no-unused-vars": [
        "warn",
      ],
      // Prevent usage of console.log and other console methods
      "no-console": [
        "error",
        { allow: ["warn", "error"] }
      ],
      // Prevent usage of inline comments
      "no-inline-comments": "error",
      // Warn on usage of debugger statements
      "no-debugger": "warn",
      // Error when res.error is used to expose sensitive information
      "no-restricted-syntax": [
        "error",
        {
          "selector": "CallExpression[callee.object.name='res'][callee.property.name='error']",
          "message": "Do not expose sensitive information via res.error."
        }
      ],
      // Enforce a specific import order without fixing
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always",
          "alphabetize": { "order": "asc", "caseInsensitive": true }
        }
      ],
    },
  },
  pluginJs.configs.recommended, // Use the recommended ESLint rules from the default JavaScript plugin
];
