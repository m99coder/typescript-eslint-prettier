# typescript-starter

## Setup

> [How to Setup a TypeScript + Node.js Project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)

```shell
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init \
  --rootDir src \
  --outDir build \
  --esModuleInterop \
  --resolveJsonModule \
  --lib es6 \
  --module commonjs \
  --allowJs true \
  --noImplicitAny true
# npx tsc
npm install ts-node nodemon --save-dev
npm install rimraf --save-dev
```

> [How to use ESLint with TypeScript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)

```shell
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

> [How to use Prettier with ESLint and TypeScript in VSCode](https://khalilstemmler.com/blogs/tooling/prettier/)

```shell
npm install prettier --save-dev
npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```

> [Enforcing Coding Conventions with Husky Pre-commit Hooks](https://khalilstemmler.com/blogs/tooling/enforcing-husky-precommit-hooks/)

```shell
npm install husky --save-dev
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/pre-commit "npm run lint"
```

Alternatively, use [lint-staged](https://github.com/okonet/lint-staged)

```shell
npx mrm@2 lint-staged
```

## Testing

```shell
npm install eslint-plugin-jest jest jest-cucumber ts-jest @types/jest --save-dev
npm set-script test "jest"
npm set-script test:dev "jest --watchAll"
npx ts-jest config:init
```

## Backup

```shell
tar -czvf typescript-starter.tar.gz typescript-starter
du -h typescript-starter.tar.gz
tar -xvf typescript-starter.tar.gz
```
