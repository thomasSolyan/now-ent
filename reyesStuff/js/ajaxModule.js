var AjaxModule = new (function() {      
    this.setDataTemplate = function(content, dataUrl, appendTo) {
        $.ajax({
            url: dataUrl,
            method: 'GET',
            headers: { 'Accept': 'application/json; odata=verbose' },
            success: function (data) {               
                var template = Handlebars.compile(content),
                    html = template(data);
                $(appendTo).append(html);
                console.log(data);
            },
            error: function(jqxhr) {
                console.log(jqxhr.statusText);
            }
        });      
    }   
})();
