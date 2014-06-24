require.config({
  paths: {
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
    text: "libs/text",
    handlebars: "libs/handlebars",
    nav: "libs/jquery.nav",
    scrollTo: "libs/jquery.scrollTo",
    stickey: "libs/jquery.sticky",
    supersized: "libs/supersized.3.2.7.min",
    shutter: "libs/supersized.shutter",
    modals: "modals"
  }
});


// common
require(['jquery'], function ($) {
  if (typeof window.$ === 'undefined') {
    window.$ = window.jQuery = $;
  }
  if (typeof console === 'undefined') {
    this.console = {
      log : function () {}

    };
  }
  // invoke the page-defined script
  if (window.JSModule) {
    require([JSModule], function (JSModule) {});
  }
});
