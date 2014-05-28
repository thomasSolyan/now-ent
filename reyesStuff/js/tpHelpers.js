Handlebars.registerHelper('dateFormat', function(val) {
	return (new Date(val)).toString().split(' ').splice(1,4).join(' ');
});

Handlebars.registerHelper('visible', function(val) {
	if (val === 'false' || !val) { return 'invisible' }
});

Handlebars.registerHelper('noMarkup', function(val) {
    return val.replace(/(<([^>]+)>)/ig,"");
});