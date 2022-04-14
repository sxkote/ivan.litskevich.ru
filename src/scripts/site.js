$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
  if ($('#skills').isInViewport()) {
    $('.skillbar').each(function () {
      var bar = $(this).find('.skillbar-bar');

      var width = $(this).attr('data-percent');
      if (width) {
        bar.width('0%');
        bar.animate({ width: width }, 6000);
      }

      var color = $(this).attr('data-color');
      if (color) {
        bar.css('background-color', color);
      }

      var percent = $(this).find('.skillbar-percent');
      if (percent) {
        percent.text(width);
      }
    });
  }
});
