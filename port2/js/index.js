$('section.friend .self').click(function(){
            $(this).addClass('open');
            $(this).next('section.friend .friend-box-hide').show();
    });

    $('section.friend .fa-circle-xmark').click(function(){
            $(this).parent('section.friend .friend-box-hide').hide();
            $(this).parent('section.friend .friend-box-hide').siblings('.self').removeClass('open');

    });

    $('#mo-friend .swiper-button-next, #mo-friend .swiper-button-prev, #mo-friend .swiper-pagination').click(function(){
            $('section.friend .friend-box-hide').hide();
            $('section.friend .friend-box-hide').siblings('.self').removeClass('open');
    });

