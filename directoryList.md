|-- VPic
    |-- .babelrc                                        # babel相关配置
    |-- .editorconfig                                   # 编辑器格式统一配置
    |-- .eslintignore                                   # eslint检查忽略文件
    |-- .eslintrc.js                                    # eslint相关配置
    |-- .gitignore                                      # git版本管理工具忽略的文件
    |-- index.html                                      # 页面入口模板文件
    |-- package.json                                    # 项目脚本以及依赖配置文件
    |-- README.md                                       # 项目描述信息文件
    |-- build                                           # webpack配置文件
    |   |-- build.js
    |   |-- ...
    |-- config                                          # 项目配置文件
    |   |-- index.js
    |   |-- ...
    |-- node_modules                                    # 项目依赖模块
    |   |-- ...
    |-- src                                             # 项目主要工程文件
    |   |-- main.js                                     # 系统的入口文件
    |   |-- VPic.vue                                    # 系统的组件源（根组件）
    |   |-- assets                                      # webpack处理后的资源
    |   |   |-- logo.png
    |   |-- components                                  # 系统ui组件
    |   |   |-- filter.vue                              # 图像滤镜组件
    |   |   |-- sidebar.vue                             # 图像参数调节组件
    |   |   |-- toolbar_module                          # 辅助操作组件
    |   |       |-- action.vue
    |   |       |-- index.vue
    |   |   |-- Veditor                                 # 图像编辑（预览）组件
    |   |       |-- canvas.vue                          # canvas画布
    |   |       |-- index.vue
    |   |       |-- tip.vue                             # 一些操作提示的组件
    |   |       |-- upload_module                       # 图像上传组件
    |   |           |-- dialog.vue                      # 预选图片弹窗
    |   |           |-- index.vue
    |   |-- store                                       # Vuex：组件状态管理中心（数据交汇中心）
    |       |-- index.js
    |       |-- ...
    |-- static                                          # 系统静态资源
    |   |-- .gitkeep
    |   |-- css
    |   |   |-- element-variables.css
    |   |   |-- ...
    |   |-- image
    |   |   |-- cover_original.jpg
    |   |   |-- ...
    |   |-- lib
    |   |   |-- caman.full.js
    |   |   |-- ...
    |   |-- sprites
    |       |-- blur.png
    |   |   |-- ...
