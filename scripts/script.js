// Twilightbloom - Simple, Scalable and Maintainable Architecture.

// IE support for "main"
document.createElement('main');

// Object-Fit
$(function () { objectFitImages() });

// Add target="_blank" rel="noreferrer noopener"
$('a[href^="http://"], a[href^="https://"]').attr({ target:"_blank", rel:"noreferrer noopener" });

// Smooth scroll
$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 300,
      function() { window.location.hash = hash; });
    }
  });
});

// Toggle class on click
$(document).ready(function($) {
  $('.c-site-menu').click(function() {
    $('.c-site-menu').stop().toggleClass('js-active');
    $('.l-site-navigation').stop().toggleClass('js-show');
  });
});

// Detect if user is using TAB to navigate
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('tab-used');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);
