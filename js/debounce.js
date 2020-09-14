'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 300; // ms
  
  window.debounce = function (fun) {
    var lastTimeout = null;
    console.log(1);
    return function() {
      var args = arguments;
      console.log(2);
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function() {
        fun.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  }
})();