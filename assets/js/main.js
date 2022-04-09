const logo = document.getElementById('logo');
const filmImg = document.getElementById('filmImg');

$(document).ready(function(){
    $("#createBtn").click(function() {
        $(".main-panel__img").fadeOut("normal", function() {
            filmImg.src = '/assets/img/no_film_img.png';
            $(".main-panel__img").fadeIn("normal");
        });

        $(".main-panel__next-assembly").fadeOut("normal", function() {
            $(".main-panel__create-assembly").fadeIn("normal");
        });
    });

    $("#searchFilmField").on("input", function() {
        $(".search-results").fadeIn("normal");
    })
});

logo.addEventListener('click', function() {
    window.location.reload();
})
