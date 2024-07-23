document.addEventListener('DOMContentLoaded', function() {
    function makeOneActive(select, active) {
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

    makeOneActive('.nav-link', 'active-tab');
    makeManyActive('.type', 'active-type');

    // Кнопка Очистить в Расширенном поиске
    $(".extend-reset-btn").click(function() {
        $('.selectpicker').selectpicker('deselectAll');
    });
});
