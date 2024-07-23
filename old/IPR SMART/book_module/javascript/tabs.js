$(document).ready(function() {
    // Для типов
    function tabsSwitch(blockId, defaultTagId) {
        $(blockId).find(".nav-content").hide();
        $(defaultTagId).show();

        // Обработка клика
        $(blockId).find(".nav-link").click(function(){
            let target = $(this).data("target");
            $(blockId).find($(".nav-content")).hide();
            $(target).show();
        });
    }

    tabsSwitch("#nav-type-block", "#ugnp");
    tabsSwitch("#nav-search-block", "#extend");
});