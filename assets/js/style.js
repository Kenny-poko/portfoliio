// ヘッダーのスクロールイベント
$(function(){
   $(window).scroll(function(){
      var obj_t_pos = $('main').offset().top;
      var scr_count = $(document).scrollTop();
      if(scr_count > obj_t_pos){
         $('header').addClass('header_bg');
      }else{
         $('header').removeClass();
      }
   })
});



//グローバルナビ SP用スワイプメニュー
$(function () {
	$('.humberger_button').click(function () {
		$(this).toggleClass('active');
		$('header .inner_box nav , .humberger_bg').toggleClass('open');
	})
	$('.humberger_bg , .global_nav li a').click(function () {
		$('.humberger_button').removeClass('active');
		$('header .inner_box nav , .humberger_bg').removeClass('open');
	});
});




//ページ内リンクへスムーズに動くボタン
$(function(){
	var headerHight = 70;
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

function scrollToggleClass(rangeTarget, addTarget, classname) {
  if($(rangeTarget).length){
    scroll = $(window).scrollTop();
    startPos = $(rangeTarget).offset().top - 30;
    endPos = startPos + $(rangeTarget).outerHeight() - 30;
    if (scroll > startPos && scroll < endPos) {
        $(addTarget).addClass(classname);
    } else {
        $(addTarget).removeClass(classname)
    }
  }
}


