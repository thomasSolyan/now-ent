var ModalModule = new (function() {
  var _base = this;

  this.destroyModal = function(selector) {
    if ($(selector + ' .modal-header').length > 1) {
      $(selector + ' .modal-header')[0].remove();
    }
    if ($(selector + ' .modal-body').length > 1) {
      $(selector + ' .modal-body')[0].remove();
    }
  };

  this.setTemplate = function(content, data, appendTo, title, selector) {
    $.each(data, function(i, el) {
      var dataTitle = el.title.toLowerCase();
      if (dataTitle === title) {
        template = Handlebars.compile(content),
        html = template(el);
        appendTo.append(html);
        _base.destroyModal(selector);
        console.log(el);
        return;
      }
    });
  };

  this.getData = function(content, dataUrl, appendTo, title, selector) {
    $.ajax({
      url: dataUrl,
      method: 'GET',
      success: function (data) {
        _base.setTemplate(content, data, appendTo, title, selector);
      },
      error: function(jqxhr) {
        console.log(jqxhr.statusText);
      }
    });
  };
})();