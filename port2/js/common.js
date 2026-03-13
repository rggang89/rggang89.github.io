$(function(){

// 헤더 서브 메뉴 드롭 다운
$('.menu>li').mouseenter(function(){
        $(this).children('.pc-sub-menu').stop().slideDown('fast'); });

$('.menu>li').mouseleave(function(){
        $(this).children('.pc-sub-menu').stop().slideUp('fast'); });



    // 헤더 언어 선택 드롭 다운
    $('.down').click(function(){
        $(this).next('ul').toggle();
    });

    // 헤더 언어 선택
    $('.down-item').click(function(){
        var imgSrc = $(this).find('img').attr('src');
        var langText = $(this).find('span').text();
    // 상단 언어
    $('.down > img').attr('src', imgSrc);
    $('.down .selected-lang').text(langText);
    // 드롭다운 닫기
    $('.down').next('ul').hide();
    });

    // sub-menu
    $('.menu-bt').click(function(){
            $('#mo-header .sub-menu').css({'right':'0px'});
    });

    $('.sub-menu-list').click(function(){
        $(this).children('a').children('i').toggleClass('rotate');
        $(this).nextUntil('.sub-menu-list', '.sub-menu2').slideToggle('fast');
    });

    $('.exit').click(function(){
            $('#mo-header .sub-menu').css({'right':'-800px'});            
            $('.sub-menu-list').children('a').children('i').removeClass('rotate');
            $('.sub-menu2').css({'display':'none'});
    });

    // top 버튼
    $(window).scroll(function() { 
                    if ($(this).scrollTop() > 900) { 
                            $('.top').fadeIn(); } 
                    else { 
                            $('.top').fadeOut();
                            }
                    }); 
});