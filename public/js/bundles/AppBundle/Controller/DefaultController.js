/**
 * @namespace \bundles\AppBundle\Controller\
 */
define([
    'bundles/AppBundle/Component/Search',
    'bundles/AppBundle/Component/Webview',
    'bundles/AppBundle/Component/TabsHandler'], function (Search, Webview, TabsHandler) {
'use strict';
    var container = 'div#container';
    var tabs = [], webviews = [];
    // Submissive One
    // chatiw
    return {
        /**
         * Controller constructor.
         * This is automatically called by the
         * kernel when the controller is loaded.
         */
        init: function () {



            // var webview1 = new Webview(container);
            // webview1.create('http://google.com');

            TabsHandler.init();

            Search.init(function (term) {
                var url  = 'https://duckduckgo.com/?q=' + term;
                var webview1 = new Webview(container);
                webview1.create(url);
            });

            this.bind();
        },

        bind: function () {



        },
    };
});
