
const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

/* fillYears(yearsField) — функция задает значения для поля Год от текущего года до 1950.
    yearsField — jquery-объект поля Год */
function fillYears(yearsField) {
    let currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= 1950; i--) {
        yearsField.append($('<option>', {
            value: i,
            text: i
        }));
    }
	yearsField.selectpicker('refresh');
}

/* fillMonths(monthsField) — функция задает значения для поля Месяц.
    monthsField — jquery-объект поля Месяц */
function fillMonths(monthsField) {
    for (let i = 1; i <= 12; i++) {
        monthsField.append($('<option>', {
            value: months[i - 1],
            text: months[i - 1]
        }));
    }
    monthsField.selectpicker('refresh');
}

/* getDaysInMonth(year, month) — функция для определения количества дней в месяце для заданного года.
    year — год, для которого подсчитывается кол-во дней
    month — месяц, для которого подсчитывается кол-во дней */
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

/* fillDays(daysField, monthsField, yearsField) — функция задает значения для поля День.
    daysField — jquery-объект поля День
    monthsField — jquery-объект поля Месяц
    yearsField — jquery-объект поля Год */
function fillDays(daysField, monthsField, yearsField) {
    // Инициализация переменных month и year значениями по умолчанию
    let month = months.indexOf('Январь');
    let year =  new Date().getFullYear();

    // Получение текущего месяца и года
    if(monthsField.val()) {
        month = months.indexOf(monthsField.val()) + 1;
    }
    if(yearsField.val()) {
        year = parseInt(yearsField.val());
    }

    let daysInMonth = getDaysInMonth(month, year);
	
    daysField.selectpicker('destroy');

    for (let i = 1; i <= daysInMonth; i++) {
        let option = $('<option>', {
            value: i,
            text: i
        });
        daysField.append(option);
    }

    daysField.selectpicker("render");
}

$(document).ready(function() {
    // Сохраняем элементы jQuery в переменные
    let daysField = $('#days');
    let monthsField = $('#months');
    let yearsField = $('#years');

    fillYears(yearsField);
    fillMonths(monthsField);
    fillDays(daysField, monthsField, yearsField);

    // Обработка изменения значений полей Месяц и Год
    monthsField.add(yearsField).change(function() {
        daysField.empty();
		fillDays(daysField, monthsField, yearsField);
    });
});