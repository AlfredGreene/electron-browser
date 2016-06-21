/**
 * Framework inflector
 */
define(function () {
'use strict';
    return {
        /**
         * Convert first letter of string to uppercase.
         *
         * @param  string
         * @return string
         */
        ucfirst: function(str) {
            str = str.toLowerCase();
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        /**
         * Javascript equivalent of sprintf.
         * {@link "http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format"}
         *
         * @param string
         * @param object
         * @return string
         */
        strFormat: function (str, params) {
            str = str.toString();
            for (var arg in params) {
                str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), params[arg]);
            }

            return str;
        },

        /**
         * Strips all accents from a string
         * @param  string Raw input string
         * @return string Normalized string
         */
        stripAccents: function (str) {
            var rExps = [
                {re:/[\xC0-\xC6]/g, ch:'A'},
                {re:/[\xE0-\xE6]/g, ch:'a'},
                {re:/[\xC8-\xCB]/g, ch:'E'},
                {re:/[\xE8-\xEB]/g, ch:'e'},
                {re:/[\xCC-\xCF]/g, ch:'I'},
                {re:/[\xEC-\xEF]/g, ch:'i'},
                {re:/[\xD2-\xD6]/g, ch:'O'},
                {re:/[\xF2-\xF6]/g, ch:'o'},
                {re:/[\xD9-\xDC]/g, ch:'U'},
                {re:/[\xF9-\xFC]/g, ch:'u'},
                {re:/[\xD1]/g, ch:'N'},
                {re:/[\xF1]/g, ch:'n'} ,
                {re: '’', ch: "'"}
            ];

            for (var i=0, len=rExps.length; i<len; i++) {
                str=str.replace(rExps[i].re, rExps[i].ch);
            }
            return str;
        }
    };
});
