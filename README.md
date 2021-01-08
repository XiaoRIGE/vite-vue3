# 快速使用vite+vue3创建项目

# 1.全局安装create-vite-app
yarn global add create-vite-app

# 2.创建项目
cva vue3-ui
或者
create-vite-app vue3-ui

Vue 2 和 Vue 3 的区别 90% 的写法完全一致，除了以下几点

Vue 3 的 Template 支持多个根标签，Vue 2 不支持
Vue 3 有 createApp()，而 Vue 2 的是 new Vue()
createApp(组件)，new Vue({template, render})

# 3.启动项目
yarn 
yarn dev

# 4.集成依赖
在 vite 项目里使用 sass/less 等也可以跟使用 webpack 的时候一样优雅了，只需要安装对应的 css 预处理器即可
集成less-loader
yarn add less less-loader --dev
集成eslint
yarn add -D eslint eslint-plugin-vue
yarn add -D eslint-plugin-import eslint-plugin-node eslint-plugin-promise
集成prettier
yarn add -D prettier eslint-config-prettier eslint-config-prettier

# 5打包上线
yarn build
