$(document).ready(function() {
    // Первоначальное скрытие контента, показ контента по умолчанию
    $("#nav-block").find(".nav-content").hide();
    $("#ugnp").show();

    // Обработка клика на табы
    $("#nav-type").find(".nav-link").click(function(){
        let target = $(this).data("target");

        $(".nav-content").hide();

        $(target).show();
    });
});