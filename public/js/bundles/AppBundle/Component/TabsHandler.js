/**
 * @namespace \bundles\AppBundle\Component\
 */
define(function () {
'use strict';

    var container = 'ul#tabs',
        last = 'li#last-tab',
        tabs = [];

    return {
        /**
         *
         */
        init: function () {
            var _self = this;

            $('a[data-toggle="new"]').unbind('click').bind('click', function (e) {
                e.preventDefault();
                _self.add('New tab');
                console.log("hi");
            });
        },

        /**
         *
         */
        add: function () {
            var tab = $(this.template());

            tab.insertBefore($(last));
            tabs.push(tab);
            this.bindTab(tab);
        },



        /**
         *
         */
        bindTab: function (tab) {
            var _self = this;

            tab.find('a[data-toggle="view"]').unbind('click').bind('click', function (e) {
                e.preventDefault();
            });
            
            tab.find('a[data-toggle="close"]').unbind('click').bind('click', function (e) {
                e.preventDefault();
                _self.remove($(this).parent());
            });
        },

        /**
         *
         */
        remove: function (element) {
            element.remove();
        },

        /**
         * Get single tab template.
         *
         * @param  string
         * @return string
         */
        template: function (title) {
            return '<li>'
                + '<a class="tab" href="" data-toggle="view">'+ title +'</a>'
                + '<a class="close" href="" data-toggle="close"><span class="cs-cross"></span></a>'
            + '</li>';
        }
    };
});
