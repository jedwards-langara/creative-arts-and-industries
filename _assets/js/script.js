document.querySelector('.current-year').innerHTML = new Date().getFullYear();



$(document).ready(function () {
    $(".discover-programs").click(function() {
        $('html, body').animate({
            scrollTop: $("#program-grid").offset().top
        }, 500);
    });
});
