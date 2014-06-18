require.config({
  paths: {
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
    text: "libs/text",
    handlebars: "libs/handlebars",
    jqNav: "libs/jquery.nav",
    jqScrollTo: "libs/jquery.scrollTo",
    jqStickey: "libs/jquery.sticky",
    supersized: "supersized.3.2.7.min",
    superShutter: "supersized.shutter"
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


