$(function(){
    $('.main-info__slider').slick({
        arrows: false,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.main-info__slider-nav',
        
    });
    $('.main-info__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-info__slider',
        dots: false,
        arrows: false,
        variableWidth: true,
        centerMode: false,
        infinite: false,
        vertical: true,
      });

    $('.main-info__right-counter_minus').click(function(){
        const $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.main-info__right-counter_plus').click(function () {
        const $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});