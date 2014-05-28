    Handlebars.registerHelper('dateFormat', function(val) {
        var d = (new Date(val)).toString().split(' ').splice(1,4).join(' ');
        return d;
    });

    Handlebars.registerHelper('visible', function(val) {
        if (val === 'false' || !val) { return 'invisible' }
    });
