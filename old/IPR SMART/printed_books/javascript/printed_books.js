document.addEventListener('DOMContentLoaded', function() {
    function makeActive(select, active) {
        let types = document.querySelectorAll(select);
        types.forEach(function(type) {
            type.addEventListener('click', function() {
                // Удаление текущего активного элемента
                type.parentNode.parentNode.querySelector('.' + active).classList.remove(active);
                // Добавление нового
                type.classList.add(active);
            });
        });
    }

    makeActive('.nav-link', 'active-tag');
    makeActive('.type', 'active-tag');
});
