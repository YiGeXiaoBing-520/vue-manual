# webpack-vue 项目，适用于 vue+js 开发的项目打算引入 ts 开发，体验 ts 魅力的童鞋哈！！！兼容 js+ ts

## webpack5+ + vue2+

## 代码格式化规范参考

[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## node 版本：

当时手动搭建这套脚手架的时候，本地 node 版本号 14.18.1

## 安装依赖

`yarn`
or
`npm install`

## 本地开发环境

`yarn dev`
or
`npm run dev`

## 生产环境

`yarn build`
or
`npm run build`

## vue2.x 项目升级至 ts 版本，需要注意事项：

建议代码检测使用 `parser: '@typescript-eslint/parser',`，仅仅检测 ts 文件，忽略 vue 文件,
如果使用 `parser: 'vue-eslint-parser',`检测的话，会对 vue 文件进行检测，前期的不规范的地方都会暴露出来，需要一一进行修改完善，否则编译无法通过！
权衡后再做选择。

## 仅以此记录学习总结，各位努力 💪！
