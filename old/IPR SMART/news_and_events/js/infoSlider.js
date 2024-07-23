$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true, // Бесконечный цикл
        margin: 10, // Отступ между элементами
        responsiveClass: true,
        nav: true,
        responsive:{
            0:{
                items:1, // Количество отображаемых элементов на самом маленьком разрешении
            },
            600:{
                items:1, // Количество отображаемых элементов при разрешении 600px и выше
            },
            1000:{
                items:2, // Количество отображаемых элементов при разрешении 1000px и выше
            }
        }
    });

    // Изменение навигационных стрелок
    $('.owl-prev').find('span').html('<img src="img/white-arrow-left.svg" alt=""/>');
    $('.owl-next').html('<img src="img/white-arrow-right.svg" alt=""/>');
});