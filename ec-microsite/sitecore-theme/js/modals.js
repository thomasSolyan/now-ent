var ModalModule = new (function() {
  var _this = this;

  this.setSession = function(key, data) {
    data = JSON.stringify(data);
    window.sessionStorage.setItem(key, data);
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
    // $('.modal').click(function() {
    //       $(this).on('shown.bs.modal', function(ev) {
    //         $(ev.target).scrollTo( 0, 0);
    //         console.log('scroll')
    //       });
    //   });
  };

  this.setTemplate = function(content, data, appendTo, title, selector) {
    $.each(data, function(i, el) {
      var dataTitle = el.title.toLowerCase();
      if (dataTitle === title) {
        template = Handlebars.compile(content),
        html = template(el);
        appendTo.append(html);
        _this.destroyModal(selector);

        return;
      }
    });
  };

  this.getData = function(content, dataUrl, appendTo, title, selector, key) {
    var session = _this.getSession(key);
    session = JSON.parse(session);
    if (session) {
      _this.setTemplate(content, session, appendTo, title, selector);
      console.log('session');
    } else {
      $.ajax({
        url: dataUrl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
          _this.setTemplate(content, data, appendTo, title, selector);
          _this.setSession(key, JSON.stringify(data));
          console.log('request');
        },
        error: function(jqxhr) {
          console.log(jqxhr.statusText);
        }
      });
    }
  };

})();
