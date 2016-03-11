### 这是一个kerkee v0.9.0 的javascript前端项目模板 ###

### 本工程提供一个项目模板，可减轻开发环境搭建工作和客户端的前端模块功能划分。###

#### 该模块包含如下内容：####
>1. 使用MVC模式，高度解耦
>2. 引入webapp概念，配合kerkee进行无缝增量更新
>3. 本框架目标包为html.zip，无进行加密，可自行对zip包进行文件加密
>4. 可作为kerkee的h5框架使用，也可单独使用。当然kerkee native的H5可以不使用此框架，你只需引入bridgeLib.js到你的工程中即可
>5. 使用zepto underscore jquery atrtemplate等框架
>6. 使用kerkee的bridgeLib用于配合kerkee环境的搭建
>7. 使用requirejs amd模块加载器
>8. 使用gulp构建
>9. 展示了页面切分和逻辑模块划分（html、css、js），及如何根据实际切换模块。适用团队分工合作
>10. 支持两种应用场景，浏览器，移动app
>11. 支持生产环境，即可将js合并压缩成单个js文件，优化css文件，优化html文件
>12. 后期会逐步引入页面路由技术，页面转换的有限状态机应用等。
>13. 可使用URD技术配合使用更佳（URD是我2015年9月份刚提出的架构理念，目前只用在斗米客户端中，还未成熟，以后个时间分享一下）

##配置环境
1、先安装node

2、安装gulp

		`npm install -g gulp`

3、cd到core目录，安装依赖

		`npm install`

## 项目构建 ##
		`gulp build`


