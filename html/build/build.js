({
    /*npm install requirejs -g*/
    /*node r.js -o build.js*/
    appDir: '../../html',                   //相对build.js的当前路径的所属地址
    baseUrl: './',            //定位到appDir后，找到js脚本相对页面地址的位置
    dir: '../../output/target',             //生成的文件地址
    modules: [
        {
            name: 'modules/test/test',
            include: ['almond', 'modules/test/testDo']
        }/*,{
            name: 'modules/index/index',
            include: ['almond', 'modules/index/indexDo']
        }*/
    ],
    fileExclusionRegExp: /(^build)|(.idea)|(gulpfile.js)|(gulp.sh)|(package.json)|(.gitignore)|(tpl)|(less)$/,
    optimizeCss: 'standard', /* none|standard|standard.keepLines|standard.keepComments|standard.keepComments.keepLines */
    removeCombined: true,
    inlineText: false,
    //optimize: "none",

    waitSeconds: 10,

    '*':{
        'text':'widget/require.text',
        'css':'widget/require.css'
    },

    paths: {
        core: "../core",
        api:"../core/coreApi",
        when:"lib/when",
        kerkee: "../core/kerkee",
        swiper: "lib/swiper.min",
        zepto:"lib/zepto.min",
        lazyload:"lib/jquery.lazyload",
        underscore: 'lib/underscore',
        fastclick: "lib/fastclick",
        template: 'lib/template',
        domReady: 'widget/domReady',
        text: 'widget/require.text',
        css: 'widget/require.css',
        text_path:"modules",     // eg:"text!text_path/channel.tpl.html"
        css_path:"static/css",           // eg:"css!css_path/new.css"
        jquery: 'lib/jquery-2.1.3',
        almond:"widget/almond"
    },

    shim: {
        "kerkee": {
            exports: "kerkee"
        },

        "video": {
            exports: "video"
        },

        'zepto': {
            exports: '$'
        },

        when:{
            deps:['zepto'],
            exports:"when"
        },

        'template': {
            exports: "template"
        },

        lazyload: {
            deps: ['zepto'],
            exports: "lazyload"
        }
    }

})
