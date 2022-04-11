$(document).ready(function() {

    //스크롤 헤더
    $(window).on('scroll', function() { 
        if ($(window).scrollTop() > 50) { 
            $('header').addClass("fixed"); 
        } else { 
            $('header').removeClass("fixed"); 
        } 
    });
    //


    //메인 슬라이드
   $('.mslider').lightSlider({
        adaptiveHeight:true,
        item:1,
        auto: true,
        speed: 500,
        pause: 5000,
        pauseOnHover: true,
        slideMargin:0,
       controls: true,
        loop:true
    });

    //탭메뉴
    $('.tab_go').click(function(){
        $(this).parent().addClass('current')
        .siblings().removeClass('current');
        return false;
    });
    


    //sns사진 부분
    $('.sns_pic').lightSlider({
        adaptiveHeight:true,
        item:4,
        auto: true,
        speed: 300,
        pause: 2000,
        pauseOnHover: true,
        slideMargin:4,
        controls: false,
        pager: false,
        loop:true
    });


    //top버튼
    $(document).ready(function(){
        $('.top_btn').hide();
    })
    $(document).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.top_btn').fadeIn(200);
        } else {
            $('.top_btn').fadeOut(200);
        }
    });
    $('.top_btn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });
});

