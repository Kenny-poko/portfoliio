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


// ふわっと表示（タイトルなど）
$(function(){
	$(".fadein_js").on('inview', function(event, isInView) {
		console.log(isInView);
		if(isInView){
			$(this).stop().addClass('txt_fadein');
		}
	});
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



//pagetop
$(function() {
    var topBtn = $('.pagetop');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body, html').animate({
            scrollTop: 0
        },   500);
        return false;
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
    startPos = $(rangeTarget).offset().top - 82;
    endPos = startPos + $(rangeTarget).outerHeight() - 82;
    if (scroll > startPos && scroll < endPos) {
        $(addTarget).addClass(classname);
    } else {
        $(addTarget).removeClass(classname)
    }
  }
}

// グローバルナビのhoverイベント

$(function() {
  // about_menu_js
  $('.about_menu_js').mouseover(function() {
    $('.about_menu_js , .modal_color_box , .about_menu_js > .dropdown_box , .main_visual , .common_page_ttl , main , footer').addClass('active');
  });
  $('.about_menu_js').mouseout(function() {
    $('.about_menu_js , .modal_color_box , .about_menu_js > .dropdown_box , .main_visual , .common_page_ttl , main , footer').removeClass('active');
  });
  // service_menu_js
  $('.service_menu_js').mouseover(function() {
    $('.service_menu_js , .modal_color_box , .service_menu_js > .dropdown_box , .main_visual , .common_page_ttl , main , footer').addClass('active');
  });
  $('.service_menu_js').mouseout(function() {
    $('.service_menu_js , .modal_color_box , .service_menu_js > .dropdown_box , .main_visual , .common_page_ttl , main , footer').removeClass('active');
  });
});

