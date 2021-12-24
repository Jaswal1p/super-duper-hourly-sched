$(document).ready(function() {
    $('#name').keyup(function() {
        $(this).attr('size', $(this).val().length)
    });
});