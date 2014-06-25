
    window.onload = function () {

      /* DYNAMIC MODAL START */
      $('[data-modal=blogs]').on('click', '[data-toggle=modal]', function(ev) {
        var content = $('[data-template=blog-template]').html(),
            dataUrl = 'data/blogs.json',
            appendTo = $('[data-append=modal-blog]'),
            title = $(this).data('title').toLowerCase(),
            selector = '.generic-blog',
            key = 'genericBlog';
        ModalModule.getData(content, dataUrl, appendTo, title, selector, key);
      });

      $('[data-modal=portfolio]').on('click', '[data-toggle=modal]', function() {
        var content = $('[data-template=portfolio-template]').html(),
            dataUrl = 'data/heros.json',
            appendTo = $('[data-append=modal-portfolio]'),
            title = $(this).data('title').toLowerCase(),
            selector = '.portfolio-modal',
            key = 'portfolio';
        ModalModule.getData(content, dataUrl, appendTo, title, selector, key);
      });

      $('.portfolio-modal').on('click', '[data-trigger]', function() {
        var newCase = $(this).data('trigger');
        matchCase(newCase);
      });

      function matchCase(newCase) {
        $('[data-target=".portfolio-modal"]').each(function(i, el) {
          var portTitle = $(el).data('title');
          if (newCase === portTitle) {
             $('[data-dismiss=modal]').trigger('click');
            setTimeout(function() {
              $('[data-title="' + portTitle + '"]').trigger('click')
            }, 500);
          }
        });
      }

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
          $('[placeholder]').focus(function () {
            if ($(this).val() == $(this).attr('placeholder')) $(this).val('');
          }).blur(function () {
            if ($(this).val() == '') $(this).val($(this).attr('placeholder'));
          }).blur();

          $('[placeholder]').parents('form').submit(function () {
            $(this).find('[placeholder]').each(function() {
              if ($(this).val() == $(this).attr('placeholder')) {
                $(this).val('');
              }
            });
          });
        }
      });

      /* FORMAT DATE */
      var $elem = $('.date');
      $elem.each(function(i, el) {
        var val = $(el).html();
        $(el).html((new Date(val)).toString().split(' ').splice(1,3).join(' '));
      });

      /* add divider to ddLinks */
      $('.branch-menu li:eq(3)').append('<div class="divider"></div>');

      $('[data-js-link]').each(function(i, el) {
        var copy = $(el).text().toLowerCase();
        $(el).attr('href', '#' + copy);
      })
}
