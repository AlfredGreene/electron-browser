/**
 * @namespace \bundles\AppBundle\Component\
 */
define(function () {
'use strict';

    var form = 'form#search';

    return {
        /**
         *
         */
        init: function (then) {
            var _self = this;

            $(form).unbind('submit').bind('submit', function (e) {
                e.preventDefault();
                var term = $(this).find('input[name="s"]').val();
                then(term);
            });
        },

        engineSearch: function (term) {
            
        },
    };
});
