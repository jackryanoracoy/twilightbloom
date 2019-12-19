// Twilightbloom
// Scalable and Maintainable Architecture.
//
// Author:   Jack Ryan Oracoy
// Website:  https://jackryanoracoy.github.io
// Email:    jackryanoracoy@gmail.com
// URL:      https://github.com/jackryanoracoy/twilightbloom
// License:  https://github.com/jackryanoracoy/twilightbloom/blob/master/LICENSE.txt


// IE support for "main"
document.createElement('main');

// Object-Fit
$(function () { objectFitImages() });

// Add target="_blank" rel="noreferrer noopener"
$('a[href^="http://"], a[href^="https://"]').attr({ target:"_blank", rel:"noreferrer noopener" });

// Detect if user is using TAB to navigate
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('tab-used');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);

// Toggle class on click
$(document).ready(function($) {
  $('.c-site-menu').click(function() {
    $('.c-site-menu').stop().toggleClass('js-active');
    $('.l-site-header').stop().toggleClass('js-menu-opened');
    $('.l-site-header__navigation').stop().toggleClass('js-show');
  });
});
