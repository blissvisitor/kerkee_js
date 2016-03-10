'use strict';

//requirejs通用模块设置
requirejs.config({

    baseUrl:"../../../html",

    paths: {
        core: "../core",
        api:"../core/coreApi",
        when:"lib/when",
        bridgeLib: "../core/bridgeLib",
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
        "bridgeLib": {
            exports: "bridgeLib"
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