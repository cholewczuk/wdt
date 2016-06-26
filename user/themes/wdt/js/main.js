$(function() {
  window.addEventListener('scroll', function () {
    document.body.classList[
      window.scrollY > 20 ? 'add' : 'remove'
      ]('is-scrolled');
  });

  $('.navigation-toggle').click(function () {
    $('.navigation-bar').toggleClass('navigation-visible');
  });
});
