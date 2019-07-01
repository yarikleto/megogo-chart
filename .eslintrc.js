module.exports = {
    env: {
        "browser": true,
        "node": true,
        "es6": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parser: "babel-eslint",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "react-hooks"
    ],
    rules: {
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "no-console": "warn",
        "no-unused-vars": ["warn", { "varsIgnorePattern": "React" }],
    },
    globals: {
        "PRODUCTION": true,
        "GRAPHQL_API": true,
        "IMG_API": true
    }
}