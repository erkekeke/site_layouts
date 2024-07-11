$(document).ready(function() {
    // Получаем ссылку на контейнер слайдера
    let sliderContainer = $('.date-slider').find('.slider-win');

    // Получаем текущую дату
    let currentDate = new Date();
    let currentDay = currentDate.getDate();

    // Создаем три месяца, начиная с текущего
    for (let i = 0; i < 3; i++) {
        // Создаем div для текущего месяца
        let monthDiv = $('<div class="slider-item"></div>');

        // Получаем название текущего месяца
        let monthName = currentDate.toLocaleString('default', { month: 'long' });

        // Создаем div для названия месяца
        let monthNameDiv = $('<div class="fs-14 text-uppercase opacity-50">' + monthName + '</div>');
        monthDiv.append(monthNameDiv);

        // Создаем div для дней в месяце
        let daysDiv = $('<div class="d-flex gap-4 pt-2"></div>');

        // Получаем текущий месяц и год
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        // Получаем количество дней в текущем месяце
        let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Если это первый месяц, начинаем с текущего дня
        let startDay = (i === 0) ? currentDay : 1;

        // Создаем div для каждого дня недели
        for (let j = startDay; j <= daysInMonth; j++) {
            let dayOfWeek = new Date(currentYear, currentMonth, j).toLocaleString('default', { weekday: 'short' });
            let dayDiv;

            if(dayOfWeek === 'сб' || dayOfWeek === 'вс') {
                dayDiv = $('<div class="slider-day">' +
                    '<div class="fw-600 fs-20 text-center">' + j + '</div>' +
                    '<div class="fs-13 pt-2 text-uppercase text-center weekend" style="color: rgba(185, 12, 12, 1);">' + dayOfWeek + '</div>' +
                    '</div>');
            }
            else {
                dayDiv = $('<div class="slider-day">' +
                    '<div class="fw-600 fs-20 text-center">' + j + '</div>' +
                    '<div class="fs-13 pt-2 text-uppercase text-center">' + dayOfWeek + '</div>' +
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
});
