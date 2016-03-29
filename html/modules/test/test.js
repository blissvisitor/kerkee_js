'use strict';

//requirejs通用模块设置
requirejs.config({

    baseUrl:"../../../html",

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
    },

    waitSeconds: 10,

    '*':{
        'text':'widget/require.text',
        'css':'widget/require.css'
    },

    shim: {
        "kerkee": {
            exports: "kerkee"
        },

        'zepto':{
            exports:'$'
        },

        'template': {
            exports: "template"
        },

        lazyload:{
            deps:['zepto'],
            exports:"lazyload"
        },

        when:{
            deps:['zepto']
        }
    }
});

//入口方法初始化
require(["modules/test/testDo"],function(testDo){
    testDo.init();
});
