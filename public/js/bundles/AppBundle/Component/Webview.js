/**
 * @namespace \bundles\AppBundle\Component\
 */
define(function () {
'use strict';
    return function () {
        return {
            id: null,
            url: null,
            title: null,
            element: null,
            selector: null,

            /**
             * Get id.
             *
             * @return integer
             */
            getId: function () {
                return this.id;
            },

            /**
             * Get url.
             *
             * @return string
             */
            getUrl: function () {
                return this.url;
            },

            /**
             * Get title.
             *
             * @return string
             */
            getTitle: function () {
                return this.title;
            },

            /**
             * Get element.
             *
             * @return string
             */
            getElement: function () {
                return this.element;
            },

            /**
             * Create a webview.
             *
             * @param  string Remote resource url
             * @return \Webview
             */
            create: function (url) {
                // compute height (app height minus header)
                var viewHeight = $(window).height() - $('div#header').height() - 5;

                this.id = this.createId();
                this.url = url;
                this.title = 'Truc';
                this.element = $('<webview class="visible" src="'+ this.url +'" id="'+ this.id +'" style="height:'+ viewHeight +'px"></webview>');
                
                this.element.attr('src', this.url);
                $(container).append(this.element);

                return this;
            },

            /**
             *
             *
             * @return \Webview
             */
            // load: function () {
            //     webview.addEventListener('dom-ready', () => {
            //
            //     });
            //
            //     return this;
            // },

            /**
             * Creates a (probably very) unique id.
             *
             * @return string
             */
            createId: function () {
                var text = ''
                var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

                for( var i=0; i < 5; i++ ) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }

                return text;
            }
        };
    };
});
