$(function() {

    'use strict';


    /******************************************************************/
    //MENU TOGGLE
    /******************************************************************/

    const $headerNavButton = $('.header__nav-button'),
        $headerNav = $('.header__nav');

    $headerNavButton.click(function() {
        $(this).toggleClass('active');
        $headerNav.fadeToggle(300);
    });

    $headerNav.on('click', 'a', function() {
        $headerNavButton.removeClass('active');
        $headerNav.fadeOut(300);
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800, 'swing');
    });


    /******************************************************************/
    //JURY
    /******************************************************************/

    const $juryBox = $('.jury__box'),
        $juryItem = $('.jury__item');
    let heightBox = $juryBox.height(),
        heightItem = $juryItem.height();

    $juryBox.addClass('close').css({
        'max-height': heightItem
    });

    $(window).resize(function() {
        heightItem = $juryItem.height();
        $juryBox.removeAttr('style');
        heightBox = $juryBox.height();

        $juryBox.css({
            'max-height': $juryBox.hasClass('close') ? heightItem : heightBox
        });
    });

    $('.jury-button-show').click(function() {
        if ($juryBox.hasClass('close')) {
            $(this).text('Скрыть список');
            $juryBox.animate({
                'max-height': heightBox
            },  heightBox * 0.1 + 600).removeClass('close');
        } else {
            $(this).text('Полный список');
            $juryBox.animate({
                'max-height': heightItem
            }, heightBox * 0.1 + 600).addClass('close');
            $('html, body').animate({scrollTop: $juryBox.offset().top }, heightBox * 0.1 + 600, 'swing');
        }
    });

});
