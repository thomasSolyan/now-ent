
window.onload = function () {

  /* DYNAMIC BLOG MODAL START */
  var destroyModal = function() {
        if ($('.generic-blog .modal-header').length > 1) {
          $('.generic-blog .modal-header')[0].remove();
        }
        if ($('.generic-blog .modal-body').length > 1) {
          $('.generic-blog .modal-body')[0].remove();
        }
      },

      setTemplate = function(data, title, appandTo, content) {
        $.each(data, function(i, el) {
          var dataTitle = el.title.toLowerCase();
          if (dataTitle === title) {
            template = Handlebars.compile(content),
            html = template(el);
            $(appendTo).append(html);
            destroyModal();
            return;
          }
        });
      },

      getData = function(content, dataUrl, appendTo, title) {
        $.ajax({
          url: dataUrl,
          method: 'GET',
          success: function (data) {
            setTemplate(data, title, appendTo, content);
          },
          error: function(jqxhr) {
            console.log(jqxhr.statusText);
          }
        });
      },

      content = $('[data-template=blog-template]').html(),
      dataUrl = "data/blogs.json",
      appendTo = '[data-append=modal-content]';

  $('[data-modal=blogs]').on('click', '[data-toggle=modal]', function(ev) {
    var title = $(this).data('title').toLowerCase();;
    getData(content, dataUrl, appendTo, title);
  });

  /* HOME IMAGE CHANGER START */
  $.supersized({
    slide_interval: 7000,

    // transition: 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left //
    transition: 1,
    transition_speed: 600,
    slide_links: 'false',
    slides: [
      {image: 'images/test1.jpg'},
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
