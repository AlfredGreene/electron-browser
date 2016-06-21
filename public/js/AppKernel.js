/**
 * Global require JS boostraper
 * @namespace \
 */
'use strict';
requirejs.config({
    urlArgs: 'v=' + (new Date()).getTime(), // helps refreshing assets loader during development
    paths: {
        'jquery': 'lib/jquery-1.11.2.min',
        'atwho': 'lib/jquery.atwho.min',
        'resumable': 'lib/resumable'
    },
    shim: {
        'atwho': {
            deps: ['jquery']
        },
    }
});

/**
 * @Melody\Kernel
 */
requirejs(['jquery', 'framework/Framework', 'framework/Autoloader'], function($, Framework, Autoloader) {
    // set a few configuration parameters
    // "env" is the only one required
    Framework
        .setConfig('env', 'dev')
        .setConfig('debug', true);

    console.log($);
    window.$ = $;
    window.Framework = Framework;
    // thanks to the framework autoloader, define a list of possible names (arbitrary)
    // that might correspond to a div [data-require="name"]. If found, the Autoloader.js
    // will automatically load controllers from that namespace. The autoloader will show an
    // error if the bundle namespace is not defined in require config.
    var myAutoloader = new Autoloader(Framework).init();

    /**
     * Load bundles and init(s) here
     */
    for (var i in myAutoloader.getLoaders()) {
        var controllerPath = myAutoloader.getLoaders()[i].controller;
        
        // load each bundle required controller
        requirejs([controllerPath], function(Controller) {
            Controller.init();
        });
    }
});
