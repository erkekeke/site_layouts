
/* makeActiveLeftPanelItem - функция для переключения опций левой панели */
function makeActiveLeftPanelItem() {
    // Изменения активного элемента в левой панели
    $('.left-panel-item').removeClass('active');
    $(this).addClass('active');

    if($(this).hasClass('dropdown-item')) {
        $('#library').addClass('active');
    }

    // Сокрытие начальной страницы
    if($('.start-panel').css('display') !== 'none') {
        $('.start-panel').hide();
        $('.right-panel').show();
        $('#right-panel-tabs').show();
    }

    // Смена табов в правой панели
    $('#right-panel-tabs .nav-tabs').hide();
    $('#' + $(this).attr('id') + '-tabs').css('display', 'flex');

    // Смена контента в правой панели
    $('.right-panel-item').hide();
    $('#' + $(this).attr('id') + '-content').show();
}

/* checkPasswordStrength - функция для проверки сложности пароля */
function checkPasswordStrength() {
    var password = $('#password').val();

    // Вычисление сложности пароля
    var strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
        strength += 1;
    }

    // Определение уровня сложности пароля
    if (password.length < 8 || strength < 2) {
        $('.current').css('width', '33%');

    } else if (password.length < 12 || strength < 3) {
        $('.current').css('width', '66%');
    } else {
        $('.current').css('width', '100%');
    }
}

/* changeEye - функция для изменения глаза в input:password */
function changeEye(toggle, password) {
    $(toggle).on('click', function() {
        // Переключение типа input между password и text
        const passwordField = $(password);
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);

        // Переключение иконки
        $(this).toggleClass('fa-eye fa-eye-slash');
    });
}

// функция initSelect - инициализирует конкретный тег select с помощью select2
function initSelect(tag, placeholder="") {
    $(tag).select2({
        placeholder: placeholder,
        minimumResultsForSearch: Infinity,
        dropdownPosition: 'below'
    });
}

$(document).ready(function () {



    // Подключение функционала левой панели
    $('.left-panel-item').click(makeActiveLeftPanelItem);

    // отключение события клика для элемента Библиотека в левой панели
    $('#library.left-panel-item').off('click');

    // инициализация селектов
    // Массив с парами ключ-значение
    const selectOptions = [
        { selector: '#detailed-by-books-clarify-the-ugnp', placeholder: 'Выбор из списка' },
        { selector: '#detailed-by-books-publication-type', placeholder: 'Выбор из списка' },
        { selector: '#detailed-by-books-intended-purpose', placeholder: 'Выбор из списка' },
        { selector: '#rec-literature-chapter', placeholder: 'Выбор из списка' },
        { selector: '#recommended-publications-on-UGNP-select-a-group', placeholder: 'Выберите из списка или введите название' },
        { selector: '#rec-literature-recommended-by-whom', placeholder: 'Выбор из списка' },
        { selector: '#collections-on-digital-disciplines-select-a-section', placeholder: 'Выберите из списка или введите название' },
        { selector: '#report-on-excluded-publications-status', placeholder: 'Выберите из списка' },
        { selector: '#report-on-excluded-publications-ugnp', placeholder: 'Выбор из списка' },
        { selector: '#report-on-excluded-publications-sorting-options', placeholder: 'Выбор из списка' },
        { selector: '#report-on-excluded-publications-the-intended-purpose', placeholder: 'Выбор из списка' },
        { selector: '#report-on-excluded-publications-publication-type', placeholder: 'Выбор из списка' },
        { selector: '#online-courses-course-holder', placeholder: 'Выберите' },
        { selector: '#online-courses-end-to-end-technologies', placeholder: 'Выберите' },
        { selector: '#online-courses-branches-of-knowledge', placeholder: 'Выберите' },
        { selector: '#users-status', placeholder: 'Выберите' },
        { selector: '#online-courses-special-sections', placeholder: 'Выберите' }
    ];

    selectOptions.forEach(option => {
        initSelect(option.selector, option.placeholder);
    });

});
// Функционал глаза в input:password
$(document).ready(function() {
    changeEye('#togglePassword-1', '#password');
    changeEye('#togglePassword-2', '#repeat-password');
});
$(document).ready(function() {
   $('#mobile-menu').click(function () {
       $('.left-panel').toggleClass('show');
       $(this).toggleClass('rotate');
   });
});