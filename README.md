# my-spa

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

app層級的狀態應該集中到 store 中

mutations 是改變 state 的唯一方法, 而且是同步的

非同步的應放在 actions 中