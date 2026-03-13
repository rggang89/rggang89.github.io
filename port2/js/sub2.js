$(function(){
    // list 언더바    
    $('section.list .swiper-wrapper p:first').addClass('blue-under');

    $('section.list .swiper-wrapper p').click(function(){
        $('section.list .swiper-wrapper p').removeClass('blue-under');
        $(this).addClass('blue-under');
    });

    // list select
    $('section.list .select span.m3:first').addClass('blue-click');

    $('section.list .select span.m3').click(function(){   
        $('section.list .select span.m3').removeClass('blue-click');
        $(this).addClass('blue-click');
    });


    // pop-post 좋아요, 북마크
    $('.pop-box .fa-regular.fa-heart, .pop-box .fa-regular.fa-bookmark').click(function(){
        $(this).hide();
        $(this).next('i').show();
        $(this).siblings('span').addClass('click-txt-blue');
    });

    $('.pop-box .fa-solid.fa-heart, .pop-box .fa-solid.fa-bookmark').click(function(){
        $(this).hide();
        $(this).prev('i').show();
        $(this).siblings('span').removeClass('click-txt-blue');
    });


    // post 좋아요, 북마크
    $('.post-box .fa-regular.fa-heart, .post-box .fa-regular.fa-bookmark').click(function(){
        $(this).hide();
        $(this).parent().next().children('i').show();
        $(this).parent().parent().children('.r2').addClass('click-txt-blue');
    });

    $('.post-box .fa-solid.fa-heart, .post-box .fa-solid.fa-bookmark').click(function(){
        $(this).hide();
        $(this).parent().prev().children('i').show();
        $(this).parent().parent().children('.r2').removeClass('click-txt-blue');
    });

    // section.page 페이지 버튼
    // 초기 페이지 버튼1 기본 설정
    $('#first').addClass('page-click');
    $('section.page .flex-box li.page-num').click(function(){
        $('section.page .flex-box li.page-num').removeClass('page-click');
        $(this).addClass('page-click');
    });
});