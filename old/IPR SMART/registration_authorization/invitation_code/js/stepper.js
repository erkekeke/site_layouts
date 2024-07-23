$(document).ready(function(){
    // Событие клика на кнопку Далее
    $('.next').click(function (event) {
        event.preventDefault();

        $('.step').each(function () {
            // Находим текущий активный блок
            if ($(this).css('display') === 'block') {

                $(this).css('display', 'none'); // скрываем текущий

                $(this).next().css('display', 'block'); // отображаем следующий

                return false; // прерывает цикл после первого совпадения
            }
        });
    });
});