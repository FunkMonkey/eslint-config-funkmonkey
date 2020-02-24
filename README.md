# eslint-config-funkmonkey

Opinionated eslint configuration based on [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
mostly for use in my personal projects.

## Usage

You can extend one of the following configurations:
- eslint-config-funkmonkey/javascript
- eslint-config-funkmonkey/javascript-react
- eslint-config-funkmonkey/typescript
- eslint-config-funkmonkey/typescript-react

### `.eslintrc.yaml`

```yaml
---
  extends: eslint-config-funkmonkey/typescript
  parser: "@typescript-eslint/parser"
  parserOptions:
    project: ./tsconfig.json
```