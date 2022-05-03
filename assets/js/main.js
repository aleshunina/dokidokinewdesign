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



const searchResult = document.getElementsByClassName('search-result');
if (searchResult.length > 1){
    searchResult[0].style.borderBottomLeftRadius = '0px';
    searchResult[0].style.borderBottomRightRadius = '0px';
    for (let i = 1; i <= searchResult.length - 2; i++) {
        searchResult[i].style.borderRadius = '0px';
       }
    searchResult[searchResult.length -1].style.borderTopLeftRadius = '0px';
    searchResult[searchResult.length -1].style.borderTopRightRadius = '0px';
}

if (searchResult.length >= 4){
    document.getElementsByClassName('search-results')[0].style.height = '50%'
}
