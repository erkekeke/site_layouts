$(document).ready(function () {
    // let groupLabels = document.querySelectorAll('.group-label');
    let groupLabels = document.querySelectorAll('.group-label');

    function openBranch(groupLabels) {
        groupLabels.forEach(function(label) {
            label.addEventListener('click', function(event) {
                let groupChildren = this.nextElementSibling; // Тег содержимого ветки (ul)

                // Замена ветки на активную и наоборот
                if (this.parentNode.classList.contains('active-branch')) {
                    this.parentNode.classList.remove('active-branch');
                } else {
                    this.parentNode.classList.add('active-branch');
                }

                // Раскрытие и закрытие содержимого ветки
                if (groupChildren) {
                    if (groupChildren.style.display === "block") {
                        groupChildren.style.display = "none";
                        this.parentNode.classList.remove('active-branch');

                        // Обработка всех веток внутри текущей
                        groupChildren.querySelectorAll('li').forEach((function (li) {
                            li.classList.remove('active-branch');
                        }));
                    }
                    else {
                        groupChildren.style.display = "block";
                        this.parentNode.classList.add('active-branch');

                        // Обработка всех веток внутри текущей
                        groupChildren.querySelectorAll('li').forEach((function (li) {
                            li.classList.add('active-branch');
                        }));
                    }
                }
            });
        });
    }

    openBranch(groupLabels);

    // Кнопка Сбросить
    $("#bbk-reset-btn").click(function() {
        $(".active-branch").removeClass("active-branch")
    });
});
