
window.onload = function () {

  /* DYNAMIC MODAL START */
  var destroyModal = function(selector) {
        if ($(selector + ' .modal-header').length > 1) {
          $(selector + ' .modal-header')[0].remove();
        }
        if ($(selector + ' .modal-body').length > 1) {
          $(selector + ' .modal-body')[0].remove();
        }
      },

      setTemplate = function(data, title, appendTo, content, selector) {
        $.each(data, function(i, el) {
          var dataTitle = el.title.toLowerCase();
          if (dataTitle === title) {
            template = Handlebars.compile(content),
            html = template(el);
            appendTo.append(html);
            destroyModal(selector);
            console.log(el);
            return;
          }
        });
      },

      getData = function(content, dataUrl, appendTo, title, selector) {
        $.ajax({
          url: dataUrl,
          method: 'GET',
          success: function (data) {
            setTemplate(data, title, appendTo, content, selector);
          },
          error: function(jqxhr) {
            console.log(jqxhr.statusText);
          }
        });
      };

  $('[data-modal=blogs]').on('click', '[data-toggle=modal]', function(ev) {
    var title = $(this).data('title').toLowerCase(),
        content = $('[data-template=blog-template]').html(),
        dataUrl = 'data/blogs.json',
        appendTo = $('[data-append=modal-content]'),
        selector = '.generic-blog';
    getData(content, dataUrl, appendTo, title, selector);
  });

  $('[data-modal=portfolio]').on('click', '[data-toggle=modal]', function() {
    var title = $(this).data('title').toLowerCase(),
        content = $('[data-template=portfolio-template]').html(),
        dataUrl = 'data/heros.json',
        appendTo = $('[data-append=modal-content]'),
        selector = '.portfolio-modal';
    getData(content, dataUrl, appendTo, title, selector);
  });

  /* HOME IMAGE CHANGER START */
  $.supersized({
    slide_interval: 7000,

    // transition: 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left //
    transition: 1,
    transition_speed: 600,
    slide_links: 'false',
    slides: [
      {image: 'images/slider1.jpg'},
      {image: 'images/slider2.jpg'},
      {image: 'images/slider3.jpg'},
      {image: 'images/slider4.jpg'}
    ]
  });

  /* HEADER and NAV FUNCTIONS START */
  $('[data-header]').sticky({ topSpacing: 0 });

  $('body, .menu-btn').on('click',function(){
    $('[data-navigation]').collapse('hide');
  })

  $('[data-navigation]').onePageNav({
    filter: ':not(.external)',
    scrollThreshold: 0.25,
    scrollOffset: 90
  });

  /* OLD IE PLACEHOLDER START */
  (function ($) {
    $.support.placeholder = ('placeholder' in document.createElement('input'));
  })(jQuery);

  $(function () {
    if (!$.support.placeholder) {
      $("[placeholder]").focus(function () {
        if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
      }).blur(function () {
        if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
      }).blur();

      $("[placeholder]").parents("form").submit(function () {
        $(this).find('[placeholder]').each(function() {
          if ($(this).val() == $(this).attr("placeholder")) {
            $(this).val("");
          }
        });
      });
    }
  });
}
