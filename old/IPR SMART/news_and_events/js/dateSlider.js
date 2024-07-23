$(document).ready(function () {
    let totalWidth = 0;
    let $slider = $('.date-slider');
    let $sliderWin = $slider.find('.slider-win');

    // Получаем общую ширину месяцев и ширину последнего
    $sliderWin.find('.slider-item').each(function() {
        totalWidth += parseInt($(this).outerWidth(true), 10);
    });

    // Задаем шаг для слайдера
    let step = 200;

    // Максимальный возможный отступ для слайдера.
    // Формула: общая ширина - ширина последнего месяца
    let max_margin_left = totalWidth;

    // Обработка кнопок перелистывания слайдера
    $('#sl-next').on('click', function(){
        // Модуль текущего отступа
        let sliderMarginCurrent = parseInt($sliderWin.css('margin-left')) * -1;

        // Если модуль значения отступа у слайдера не максимальный, то добавляем шаг. Иначе переходим в начало слайдера
        if(sliderMarginCurrent < max_margin_left) {
                $sliderWin.animate({'margin-left': '-=' + step}, 1000);
        } else {
            $sliderWin.animate({'margin-left': '0px'}, 1000);
        }
    });

    $('#sl-prev').on('click', function(){
        // Модуль текущего отступа
        let sliderMarginCurrent = parseInt($sliderWin.css('margin-left')) * -1;

        // Если находимся не в начале слайдера, делаем шаг назад. Иначе в конец слайдера
        if(sliderMarginCurrent > 0) {
            $sliderWin.animate({'margin-left': '+=' + step}, 1000);
        } else {
            $sliderWin.animate({'margin-left': '-=' + max_margin_left}, 1000);
        }
    });
});