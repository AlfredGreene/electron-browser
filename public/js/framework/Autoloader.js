/**
 * @namespace \framework\Component\Autoloader.js
 *
 * Autoloads controllers and modules via requireJS
 */
define(function() {
'use strict';

    return function(Framework) {
        const BUNDLES_DIR = 'bundles';

        return {
            loaders: [],

            /**
             * Build an array of modules from the autoloadList
             */
            init: function() {
                var debugMode = Framework.getConfig('debug'),
                    required = this.getElementsWithAttr('data-require');

                // loop through all elements
                for (var i=0; i < required.length; i++) {
                    var attribute = required[i].getAttribute('data-require'),
                        bundleName = this.getBundleName(attribute),
                        controllerName = this.getControllerName(attribute);

                    // set the build path (only build_dir + controller name)
                    var controller = this.controllerPath(bundleName, controllerName, Framework.getConfig('env'));

                    // add that to the loaders list
                    this.loaders.push({
                        //id: this.bundles[i].id,
                        // name: controllerName,
                        // path: this.bundles[i].loaderPath,
                        // namespace: namespace,
                        controller: controller,
                    });

                    // info in dev mode
                    Framework.debug('[data-require="'+ attribute +'"] detected, loading '+ controller, 'info');
                }

                return this;
            },

            /**
             * Create controller path.
             *
             * @return string Controller load path
             */
            controllerPath: function (bundleName, controllerName, env) {
                if (env === Framework.ENV_PROD) {
                    return this.trimDir(Framework.getConfig('build_dir')) + '/' + controllerName;
                } else {
                    return BUNDLES_DIR + '/' + bundleName + '/Controller/' + controllerName;
                }
            },

            /**
             * Get bundle name by splitting name(space) in "MyBundle:ControllerName"
             *
             * @return string
             */
            getBundleName: function (dataRequireAttr) {
                var parts = dataRequireAttr.split(':');
                if (parts.length !== 2) {
                    Framework.debug('Sorry, ['+ dataRequireAttr +'] bundle or controller are not properly called in the data-required attribute.');
                }

                return parts[0];
            },

            /**
             * Get controller name by splitting name(space) in "MyBundle:ControllerName"
             *
             * @return string
             */
            getControllerName: function (dataRequireAttr) {
                var parts = dataRequireAttr.split(':');
                if (parts.length !== 2) {
                    Framework.debug('Sorry, ['+ dataRequireAttr +'] bundle or controller are not properly called in the data-required attribute.');
                }

                return parts[1];
            },

            /**
             * Returns all the autoload registered modules.
             *
             * @return array
             */
            getLoaders: function() {
                return this.loaders;
            },

            /**
             * [trimSlashes description]
             * @param  {[type]} str [description]
             * @return {[type]}     [description]
             */
            trimDir: function (str) {
                return str.replace(/\/$/, '');
            },

            /**
             * Get all elements with the attribute...
             */
            getElementsWithAttr: function (attr) {
                var elements = [];
                var tags = document.querySelectorAll('div,form');

                for (var i = 0, n = tags.length; i < n; i++) {
                    if (tags[i].getAttribute(attr) !== null) {
                        elements.push(tags[i]);
                    }
                }
                return elements;
            }
        };
    };
});
