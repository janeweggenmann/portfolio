
$("li a").click(function () {
  $('li a').not(this).removeClass('active');
  $(this).toggleClass('active');
});