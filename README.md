# vue2.0-template

使用 vue2.0 搭建的基础模板,模板中主要集成了 `vue-router`、`vuex`、`cube-ui`、`sass`、`axios`

`vue-router`：https://router.vuejs.org/zh/
`vuex`：https://vuex.vuejs.org/zh/guide/
`cube-ui`（基于vue的移动端UI框架）：https://didi.github.io/cube-ui/#/zh-CN/docs/introduction
`sass`：https://www.sass.hk/
`axios`：https://www.kancloud.cn/yunye/axios/234845


## 开始使用

开发流程：
1. `git clone` 克隆此项目
2. `npm install` 安装项目依赖
3. `npm run dev` 启动项目，进入开发模式
4. `npm run build` 打包正式项目包
5. `npm run unit` run unit tests
6. `npm run e2e` un e2e tests
7. `npm test` run all tests

## 特别说明

默认使用750px设计稿进行移动端自适应开发，开发时使用px单位即可，编译时会自动转化为相应的rem。也可自行修改设计稿尺寸，可在根目录的build/utils.js 文件的 cssLoaders 方法中的 px2remLoader 处进行修改

## 项目目录结构说明
``````
vue-template
|---------src                             项目开发文件
          |-----------assets                          公共资源
                      |--------style                      样式资源
                              |-------common.scss             公共样式文件
          |-----------components                      开发组件文件（页面）
                      |--------template.vue               页面文件模板，可拷贝此文件后在编写
          |-----------router                          路由模块
          |-----------vuex                            vuex数据状态管理
                      |--------getters
                      |--------mutations
                      |--------state
                      |--------store
          |-----------App.vue                         页面总入口
          |-----------main.js                         主js文件
|---------package.json                    npm初始文件
|---------README.md                       项目说明文件
|---------.gitignore                      上传git时，指定忽略上传文件的配置文件
``````

