/**
 * Framework utils
 */
define(function () {
'use strict';
    return {
        /**
         * Helps mapping arrays.
         *
         * @param array Input array
         * @param func  Callback function
         */
        map: function (array, callback) {
            var result = [];
            for (var i=0; i < array.length; i++) {
                result.push(callback(array[i]));
            }
            return result;
        },

        /**
         * Computes an object size becaue javascript does not support obj.length
         *
         * @param  object  Object for which you wish to count its properties
         * @return integer Number of properties of the object
         */
        objectSize: function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        },

        /**
         * Check if a value is in the input array.
         *
         * @param scalar Needle
         * @param array Haystack
         */
        inArray: function (needle, haystack) {
            for (var i = 0; i < haystack.length; i++) {
                if (needle === haystack[i]) {
                    return i;
                }
            }
            return -1;
        },

        /**
         * Delays a function event.
         *
         * @param function Callback function
         * @param integer  Delay in milliseconds
         * @return void
         */
        delay: function (callback, ms) {
            var timer = 0;
            return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
        }
    };
});
