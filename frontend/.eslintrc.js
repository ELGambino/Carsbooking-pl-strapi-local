module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "@react-native-community",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
    ],
    "rules": {
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-explicit-any': 0,
        'linebreak-style': [
            "error",
            "unix"
        ],
        avoidEscape: true,
        allowTemplateLiterals: true,
        "quotes": [2, "single", { "avoidEscape": true }],
        "prettier/prettier": ["error", { "singleQuote": true }]
    }
}
