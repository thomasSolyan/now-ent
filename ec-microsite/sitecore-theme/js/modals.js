var ModalModule = new (function() {
  var _self = this;

  this.setSession = function(key, data) {
    data = JSON.stringify(data);
    window.sessionStorage.setItem(key, data)
  };

  this.getSession = function(key) {
    var data = JSON.parse(window.sessionStorage.getItem(key));
    return data;
  };

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
        _self.destroyModal(selector);
        //console.log(el);
        return;
      }
    });
  };

  this.getData = function(content, dataUrl, appendTo, title, selector, key) {
    var session = _self.getSession(key);
    session = JSON.parse(session);
    if (session) {
      _self.setTemplate(content, session, appendTo, title, selector);
      console.log('session');
    } else {
      $.ajax({
        url: dataUrl,
        method: 'GET',
        success: function (data) {
          _self.setTemplate(content, data, appendTo, title, selector);
          _self.setSession(key, JSON.stringify(data));
          console.log('request');
        },
        error: function(jqxhr) {
          console.log(jqxhr.statusText);
        }
      });
    }
  };
  
})();