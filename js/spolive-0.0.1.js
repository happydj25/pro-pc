/*메인 슬라이드*/
var miniSwiper = new Swiper('.main_slider', {
    speed: 500,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.main_slider .swiper-pagination',
    },
});

/*미니 슬라이드*/
var miniSwiper = new Swiper('.mini_slide', {
    speed: 500,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.mini_slide .swiper-pagination',
    },
});

$(".menu_btn button, .dim").click(function() {
    $(".menu_btn button, .dim").toggleClass("on");
    if ($(".dim").hasClass("on")) {
        $(".dim").fadeIn();
    } else {
        $(".dim").fadeOut();
    }
});

/*헤더 sns*/
$(".sns").on('click', function() {
    $(".sns").toggleClass('on');
});

/*헤더 login*/
$("header .right>li.login button").on('click', function() {
    $("header .right>li.login button").toggleClass('on');
});

/*인벤토리*/
$(".inventory_btn,.inventory_box .xbtn").on('click', function() {
    $(".gmk_tab").toggleClass('inven_on');
});
$(".inventory_box table td").on('click', function() {
    $(this).toggleClass('on');
});

/*최상단이동*/


$(function(){
    $(window).scroll(function(){  
           var num = $(this).scrollTop();
           if( num > 500 ){
              $("#topBtn").css("display","block");
           }else{
               $("#topBtn").css("display","none");
           }
      });
      var topEle = $('#topBtn');
        var delay = 400;
        topEle.on('click', function() {
        $('html, body').stop().animate({scrollTop: 0}, delay);
        });
    });

/*내정보 베팅내역*/

/*로그인페이지 탭메뉴*/
$(document).ready(function() {
    $(".choice_btn button").on('click', function() {
        btn_chk = $(this).attr('class');
        if ($(this).hasClass('on')) {} else {
            $(".choice_btn button").removeClass('on');
            $(this).addClass('on');
            $('.id_find').toggle();
            $('.pw_find').toggle();
        }
    });

    $("input[type='radio']").on('change', function() {
        if ($(this).is(":checked")) {
            $("input[type='radio']").not(this).parent().parent().parent().removeClass('pop_chk');
            $(this).parent().parent().parent().addClass('pop_chk');
        }
    });
});
/*로그인페이지 탭메뉴 끝*/

// 탭메뉴
$(function() {
    $(".livegame_tab ul li").click(function() {
        $(".livegame_tab ul li").removeClass('on');
        $(".livegame_tab .conBox").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });
});
$(function() {
    $(".newnews>.tab>ul>li").click(function() {
        $(".newnews>.tab>ul>li").removeClass('on');
        $(".newnews>.tab>.conBox").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });
});
$(function() {
    $(".my_betchat>.tab>ul>li").click(function() {
        $(".my_betchat>.tab>ul>li").removeClass('on');
        $(".my_betchat>.tab>.conBox").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
        $("#" + $(this).data('id') + "tit").addClass('on');
    });
    $(".gmk_tab>.tab>ul>li.tab_li ").click(function() {
        $(".gmk_tab>.tab>ul>li.tab_li ").removeClass('on');
        $(".gmk_tab>.tab>.conBox").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });
});

/*메인메뉴 드롭다운*/
$('nav .mainnav,.slidmenu').hover(function() {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
        $('nav, .slidmenu').addClass('on');
    } else if (!isHovered) {
        $('nav, .slidmenu').removeClass('on');
    }
});


/*sly*/
// 추천라이브베팅 슬라이드메뉴
jQuery(function($) {
    'use strict';
    (function() {
        var $frame = $('.slywrap .gamelist');
        var $wrap = $frame.parent();

        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            startAt: 3,
            scrollBy: 1,
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            prevPage: $wrap.find('.prevPage'),
            nextPage: $wrap.find('.nextPage')
        });
    }());
});

//사이드 탭 슬라이드메뉴
jQuery(function($) {
    'use strict';
    (function() {
        var $frame = $('.slywrap .min_gamelist');
        var $wrap = $frame.parent();

        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            startAt: 3,
            scrollBy: 1,
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            prevPage: $wrap.find('.prevPage'),
            nextPage: $wrap.find('.nextPage')
        });
    }());
});

//진행중 경기 슬라이드메뉴
(function() {
    var $frame = $('.slywrap .topgamelist');
    var $wrap = $frame.parent();

    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        startAt: 0,
        scrollBy: 1,
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        prevPage: $wrap.find('.prevPage'),
        nextPage: $wrap.find('.nextPage')
    });

}());
