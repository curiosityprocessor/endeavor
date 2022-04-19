## Compile Typescript into Javascript
install typescript (mac)

```shell
  npm i typescript -g
```

compile typescript (index.ts) -> javascript (index.js)

```shell
  tsc index.ts
```

__Use web-pack / module bundlers to automate compiling__

## tsconfig.json
JSON file containing configurations for typescript compiling, etc

* `allowJs` : allows compiling JS file
* `checkJs` : reports errors on JS file (use with allowJs)
* `noImplicitAny` : reports error on implicit `any` types

__other configurations can be found on [tsconfig reference](https://www.typescriptlang.org/tsconfig)__

__use `tsc --init` to reinitialise tsconfig.json file__

__test typescript code (tsc) on [Typescript playground](https://www.typescriptlang.org/play)__

