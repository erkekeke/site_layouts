

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


// Подключение функционала левой панели
$(document).ready(function () {
    $('.left-panel-item').click(makeActiveLeftPanelItem);
});
// Функционал глаза в input:password
$(document).ready(function() {
    changeEye('#togglePassword-1', '#password');
    changeEye('#togglePassword-2', '#repeat-password');
});
$(document).ready(function() {
    $('#library').click(function () {
        $('.results.history-work .first-row td').each(function () {
            console.log('------------------');
            console.log($(this).innerWidth());
        });
    });
});