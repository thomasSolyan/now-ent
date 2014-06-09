requirejs.config({
	paths: {
		'jquery' : 'libs/jquery',
        'bootstrap' : 'libs/bootstrap.min',
        'stickey' : 'libs/jquery.sticky',
        'scrollTo' : 'libs/jquery.scrollTo',
        'nav' : 'libs/jquery.nav',
        'pretty' : 'libs/jquery.prettyPhoto',
        'superSized' : 'libs/supersized.3.2.7.min',
        'supperShutter' : 'libs/supersized.shutter'
	},
	shim: {        	
        /*'jquery.json': {
        	deps: ['jquery'],
        	exports: 'JSON'
        }*/
	} 
});
require(['jquery'], function($) {
    window.$ = $;
	if (typeof console == 'undefined') {
		this.console = {log: function() {}};
	}
	//this will invoke the script for the page
	if (module){
		require([module], function(module){});
	}
});
