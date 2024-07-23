function tabsSwitch(block) {

    $(block).find('.nav-link').click(function () {
        // Объекты панелей
        let leftPanel = $('#left-panel');

        // Получение название блока, на который ссылается ссылается таб
        let target = $(this).data("target");

        // Отображение контента, на который ссылается таб
        $(block).find('.nav-content').hide();
        $(block).find(target + '.nav-content').show();

        // Заявка в библиотеку
        if(target === '#library-application') {
            // Отображение табов заявки в левой панели
            leftPanel.find('.nav-tabs').hide();
            leftPanel.find('#library-application-tabs').show();

            // Заменяем контент в левой панели
            leftPanel.find('.nav-content').hide();
            leftPanel.find('#your-application-content').show();

            // Скрываем контент с книгами
            $('#book-content').hide();
        }
        else if(target === '#extend' || target === '#intuitive') {
            // Отображение табов поиска в левой панели
            leftPanel.find('.nav-tabs').hide();
            leftPanel.find('#search-tabs').show();

            // Заменяем контент в левой панели
            leftPanel.find('.nav-content').hide();
            $('#ugnp-content').show();

            // Показываем контент с книгами
            $('#book-content').show();
        }
    });
}


$(document).ready(function() {
    tabsSwitch('#left-panel');
    tabsSwitch('#right-panel');
});