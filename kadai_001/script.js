$(function(){
    $('.opacity').on('mouseover', function(){
        $(this).animate({
            opacity: 0.5
        },300);
    });
    $('.opacity').on('mouseout', function(){
        $(this).animate({
            opacity: 1
        },300);
    });

    $('.fade').slick({
        autoplay: true,
        autoplayspeed: 4000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        swipe: true
      });
    
    $(window).scroll(function(){  
        let numScroll = $(this).scrollTop();
        if (numScroll <= 100){
            $('.top-button').fadeOut();
        }else if (numScroll >= 100){
            $('.top-button').fadeIn();
            }
        });

    $('a[href^="#"]').on('click',function(event){

        let nameScroll = $(this).attr('href');
        
        if (nameScroll === '#'){
            $('html,body').animate({scrollTop:0}, 500);
        } else {
            let numLink = $(nameScroll).offset().top;
            $('html,body').animate({scrollTop:numLink}, 500);
            }
        });

    $(window).scroll(function(){
        let titleScroll = $(this).scrollTop();
        let windowHeight = $(window).height();
        let aboutPlace = $('#about').offset().top;
        let worksPlace = $('#works').offset().top;
        
        if ((titleScroll + windowHeight ) >= aboutPlace ){
            $('#about').css('opacity', 1);
        }
        
        if((titleScroll + windowHeight ) >= worksPlace ){
            $('#works').css('opacity', 1);
        }
    });

    $('.worksimg').on('click', function(){
        $('#modal').fadeIn();

        let img = $(this).attr('src');
    
        if (img === 'images/works1.png') {
            $('#modal-image').attr('src','images/works1.png');
        }
        if (img === 'images/works2.png') {
            $('#modal-image').attr('src','images/works2.png');
        }
        if (img === 'images/works3.png') {
            $('#modal-image').attr('src','images/works3.png');
        }
    });

    $('#modal-close').on('click', function(){
        $('#modal').fadeOut();
    });     

});