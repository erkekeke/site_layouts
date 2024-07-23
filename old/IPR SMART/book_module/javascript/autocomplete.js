$(document).ready(function () {
    function setAutocomplete(tagId, src) {
        $(tagId).autocomplete({
            source: src
        })
    }

    let authors = ["Замятин", "Солженицын", "Булгаков"];
    let publishing = ["АСТ", "Литрес", "Просвещение"];
    let title = ['Мы', 'Матренин двор', 'Собачье Сердце'];

    setAutocomplete("#author", authors);
    setAutocomplete("#publishing", publishing);
    setAutocomplete("#title", title);
});
