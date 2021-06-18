// ハンバーガーメニュー動作
$('.hamburger_btn').click(function () {
  $('.hamburger_btn__bar').toggleClass('hamburger_btn__bar--cross');
  $('.header_nav').toggleClass('header_nav--menu_open');
  $('body').toggleClass('noscroll');
});
// ハンバーガーメニュークリック時の動作
$('.in_site_link').click(function () {
  $('.hamburger_btn__bar').removeClass('hamburger_btn__bar--cross');
  $('.header_nav').removeClass('header_nav--menu_open');
  $('body').removeClass('noscroll');
});