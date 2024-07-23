$(document).ready(function() {
    // Получаем ссылку на контейнер слайдера
    let sliderContainer = $('.date-slider').find('.slider-win');

    // Получаем текущую дату
    let currentDate = new Date();

    // Создаем три месяца, начиная с текущего
    for (var i = 0; i < 3; i++) {
        // Создаем div для текущего месяца
        let monthDiv = $('<div class="slider-item"></div>');

        // Получаем название текущего месяца
        let monthName = currentDate.toLocaleString('default', { month: 'long' });

        // Создаем div для названия месяца
        let monthNameDiv = $('<div class="grey-text fs-14 text-uppercase opacity-50">' + monthName + '</div>');
        monthDiv.append(monthNameDiv);

        // Создаем div для дней в месяце
        let daysDiv = $('<div class="d-flex gap-3"></div>');

        // Получаем текущий месяц и год
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        // Получаем количество дней в текущем месяце
        let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Создаем div для каждого дня недели
        for (let j = 1; j <= daysInMonth; j++) {
            let dayOfWeek = new Date(currentYear, currentMonth, j).toLocaleString('default', { weekday: 'short' });
            let dayDiv;

            if(dayOfWeek === 'сб' || dayOfWeek === 'вс') {
                dayDiv = $('<div class="slider-day">' +
                    '<div class="fw-600 small-text text-center">' + j + '</div>' +
                    '<div class="fs-13 red-text pt-1 text-uppercase text-center">' + dayOfWeek + '</div>' +
                    '</div>');
            }
            else {
                dayDiv = $('<div class="slider-day">' +
                    '<div class="fw-600 small-text text-center">' + j + '</div>' +
                    '<div class="fs-13 grey-text pt-1 text-uppercase text-center">' + dayOfWeek + '</div>' +
                    '</div>');
            }
            daysDiv.append(dayDiv);
        }

        // Добавляем div с днями в текущем месяце к div месяца
        monthDiv.append(daysDiv);

        // Добавляем div месяца к контейнеру слайдера
        sliderContainer.append(monthDiv);

        // Переходим к следующему месяцу
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
})