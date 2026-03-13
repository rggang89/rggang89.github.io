$(function(){

// 드롭다운
$('section.search .language .flex2').click(function(){
        $(this).parent('div').parent('.my').siblings('.my').children('div').children('.sub-lang').removeClass('open');
        $(this).next('.sub-lang').toggleClass('open');
            });

// 나의 언어 선택
    $('.my-languages .language-item').click(function(){
        var imgSrc = $(this).find('img').attr('src');
        var langText = $(this).find('span').text();
// 상단 flex2 부분
    $(this).closest('.my').find('.flex2 div img').attr('src', imgSrc);
    $(this).closest('.my').find('.flex2 span.m3').text(langText);
// 드롭다운 닫기
    $(this).parent().removeClass('open');
    });

// 학습 언어 선택
    $('.learning-languages .learning-item').click(function(){
        var imgSrc = $(this).find('img').attr('src');
        var langText = $(this).find('span').text();
// 상단 flex2 부분
    $(this).closest('.learning').find('.flex2 div img').attr('src', imgSrc);
    $(this).closest('.learning').find('.flex2 span.m3').text(langText);
    // 드롭다운 닫기
    $(this).parent().removeClass('open');
    });

// 국가 선택
$('.country-select .country-item').click(function(){
    var imgSrc = $(this).find('img').attr('src');
    var countryText = $(this).find('span').text();
// 상단 flex2 부분
    $(this).closest('.country').find('.flex2 div img').attr('src', imgSrc);
    $(this).closest('.country').find('.flex2 span.m3').text(countryText);
// 드롭다운 닫기
    $(this).parent().removeClass('open');
});

// 관심사 선택
$('section.search .interest .it-bt').click(function(){
    $(this).toggleClass('interest-blue');
    
});

// list 자세히 보기
    $('section.list .self').click(function(){
            $(this).addClass('open');
            $(this).next('section.list .list-box-hide').show();
    });

// list 닫기
    $('section.list .fa-circle-xmark').click(function(){
            $(this).parent('section.list .list-box-hide').hide();
            $(this).parent('section.list .list-box-hide').siblings('.self').removeClass('open');
   
    });

// section.page 페이지 버튼
    // 초기 페이지 버튼1 기본 설정
    $('#first').addClass('page-click');
    $('section.page .flex-box li.page-num').click(function(){
        $('section.page .flex-box li.page-num').removeClass('page-click');
        $(this).addClass('page-click');
    });


});