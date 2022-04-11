$(document).ready(function() {

    //스크롤 헤더
    $(window).on('scroll', function() { 
        if ($(window).scrollTop() > 50) { 
            $('header').addClass("fixed"); 
        } else { 
            $('header').removeClass("fixed"); 
        } 
    });
    
    //메인 슬라이드 추후 수정 필요
    var currentIndex = 0;
    var currentWidth = $('.item').width();
    
    setInterval(function(){
        if(currentIndex < 2){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        var slidePosition = currentIndex * -currentWidth;
        $('.mslider').animate({left:slidePosition}, 300)
    }, 3000);
    
    

    //top버튼
    $(document).ready(function(){
        $('.top_btn').hide();
    });
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
        
    //탭메뉴
    $('.tab_go').click(function(){
        $(this).parent().addClass('current')
        .siblings().removeClass('current');
        return false;
    });
    
});

