function makeOneActive(select, active){
    let types = document.querySelectorAll(select);
    types.forEach(function(type) {
        type.addEventListener('click', function() {
            // Удаление текущего активного элемента
            if(type.parentNode.parentNode.querySelector('.' + active)) {
                type.parentNode.parentNode.querySelector('.' + active).classList.remove(active);
            }
            // Добавление нового
            type.classList.add(active);
        });
    });
}
function makeManyActive(select, active) {
    let types = document.querySelectorAll(select);
    types.forEach(function(type) {
        type.addEventListener('click', function() {
            if(type.classList.contains(active)) {
                type.classList.remove(active);
            } else {
                type.classList.add(active);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    makeOneActive('.nav-link', 'active-tab');
    makeManyActive('.type', 'active-type');

    let rightPanel = $('#right-panel');
    let leftPanel = $('#left-panel');

    // Кнопка Очистить в Расширенном поиске
    $(".extend-reset-btn").click(function() {
        $('.selectpicker').selectpicker('deselectAll');
    });

    // Обработка нажатия на коллекции
    $('.collection').click(function () {
        $(".collection-list .collection").removeClass("active");
        $(this).toggleClass("active");

        $('#right-panel').find('.nav-content').hide();
        $('#expanded-collection').show();
    });

    // Кнопка Управление заявкой
    $('.application-management-button').click(function () {
        // Меняем табы у правой панели
        rightPanel.find('.nav-tabs').hide();
        rightPanel.find('#application-management-tabs').show();

        // Меняем контент у правой панели
        rightPanel.find('.nav-content').hide();
        rightPanel.find('#collections').show();

        // Меняем контент у левой панели
        leftPanel.find('.nav-content').hide();
        $('#application-management-content').show();

        // Отображение местоположения Заявка в библиотеку -> Управление заявкой
        $('.location').show();

    });

    // Ссылка на заявку в библиотеку
    $('.location-library-application').click(function () {
        // Отображение табов заявки в левой панели
        leftPanel.find('.nav-tabs').hide();
        leftPanel.find('#library-application-tabs').show();

        // Отображение табов заявки в правой панели
        rightPanel.find('.nav-tabs').hide();
        rightPanel.find('#main-tabs').show();

        // Заменяем контент в левой панели
        leftPanel.find('.nav-content').hide();
        leftPanel.find('#your-application-content').show();

        // Заменяем контент в правой панели
        rightPanel.find('.nav-content').hide();
        rightPanel.find('#library-application').show();

        // Скрытие контейнера местоположения
        $('.location').hide();

        // Скрываем контент с книгами
        $('#book-content').hide();
    });
});
