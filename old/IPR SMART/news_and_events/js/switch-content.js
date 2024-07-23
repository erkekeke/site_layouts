$(document).ready(function () {
   $('.option').click(function () {
       // Убираем активный класс у всех варианто и присваем его текущему
       $('.option').removeClass('active-option');
       $(this).addClass('active-option');

       // Получаем название секции, за которую отвечает текущая опция
       let sectionName = $(this).attr('class').split(' ')[1];

       // Скрываем все и показываем секцию, за которую отвечает тек. опция
       $('section').css('display', 'none');
       $('#' + sectionName).css('display', 'block');
   });
});