$(window).load(function() {
  // var ls = window.localStorage.getItem('path'),
  //     path;
  // if ((ls && ls === 'index1') || (ls && ls === 'index2')) {
  //   window.location = ls + '.html';
  // } else {
    $('[data-id=launch]').click();
    $('[data-id=survey]').on('click', 'input', function() {
      var thisId = $(this).data('id');
      if (this.checked) {
        window.location = thisId;
        path = thisId;
      }
      window.localStorage.setItem('path', path)
    });
  //}
});