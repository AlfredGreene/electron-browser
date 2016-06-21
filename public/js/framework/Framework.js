/**
 * Framework main modumle.
 *
 * @namespace \framework\Framework
 */
// fix window console
if (!window.console){ console = { log: function() {} } };

define(function() {
'use strict';

    const ENV_DEV = 'dev';
    const ENV_PROD = 'prod';

    /**
     * Default global config values here.
     * Can be overriden in bundles Configuration.js files
     */
    var config = {
        debug: true,
        build_dir: '_build/',
    };

    /**
     * Returns the current module
     */
    return {
        ENV_DEV: ENV_DEV,
        ENV_PROD: ENV_PROD,
        config:  config,

        /**
         * Set a config value.
         */
        setConfig: function(expression, value) {
            this.config[expression] = value;
            return this;
        },

        /**
         * Get a config value.
         */
        getConfig: function (expression) {
            return this.config[expression];
        },

        /**
         * Debug in the console, but very nicely formatted.
         */
        debug: function(message, type) {
            if (this.config.debug !== true) {
                return;
            }

            if (typeof type == 'undefined') {
                var type = 'info';
            }

            var color, prefix = type+':';
            switch (type) {
                case 'info':    color = '#474747'; break;
                case 'error':   color = '#E33C05'; break;
                case 'success': color = '#2B9E0B'; break;
                case 'warning': color = '#E38809'; break;
                default:        color = '#474747'; break;
            }

            console.log('%c' + prefix + ' ' + message, 'color:' + color);
        },

        /**
         * Is this an old shitty browser
         *
         * @return bool
         */
        isOldMsie: function() {
            var userAgent = navigator.userAgent.toLowerCase();
            // Test if the browser is IE and check the version number is lower than 9
            if (/msie/.test(userAgent) &&
                parseFloat((userAgent.match(/.*(?:rv|ie)[\/: ](.+?)([ \);]|$)/) || [])[1]) < 9) {
                return true;
            } else {
                return false;
            }
        }
    };
});
