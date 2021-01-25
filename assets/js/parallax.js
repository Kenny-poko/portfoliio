$(function() {
  var top = $('#particle1').offset().top; //初期値を取得
$(window).scroll(function() {
  var value = $(this).scrollTop(); //スクロールの値を取得
$('#scrollValue').text(value);
 
$('#particle1').css('top', top + value / 6);
$('#particle2').css('top', top + value / 4);
$('#particle3').css('top', top + value / 2);
 
});
});