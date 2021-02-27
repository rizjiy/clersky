var main = function() { 

    $('.navbar-button').click(function() {
        $('.header__login').animate({
            right: '0px'
        }, 200); 

    });

    $('.navbar-button__close').click(function() { 
        $('.header__login').animate({ 
            right: '-285px'
        }, 200); 
    });
};

$(document).ready(main);



