const btn = document.getElementById("flexSwitchCheckDefault");
const archiveBtn = document.getElementById('archiveBtn');
const searchSuggestionField = document.getElementById('searchSuggestionField');
const logo = document.getElementById('logo');
const currentTheme = localStorage.getItem("theme");
const bodyHidden = document.getElementById('bodyHidden');
const deleteSuggestionBtn = document.getElementById('deleteSuggestionBtn');
const selectSuggestionBtn = document.getElementById('selectSuggestionBtn');
const createBtn = document.getElementById('createBtn');
const searchFilmField = document.getElementById('searchFilmField');
const saveNewAssemblyBtn = document.getElementById('saveNewAssemblyBtn');
const filmImg = document.getElementById('filmImg');
const searchResult = document.getElementsByClassName('search-results');

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

function toggleStyle(element, attrib, darkStyle, lightStyle) {
    if (element.style[attrib] === null) {
        element.style[attrib] = darkStyle;
    }
    if(element.style[attrib] === darkStyle) {
        element.style[attrib] = lightStyle;
    } else {
        element.style[attrib] = darkStyle;
    }
  }

function toggleSrc(element, src1, src2) {
    if(element.src.includes(src1)) {
        element.src = src2;
    } else {
        element.src = src1;
    }
}

function toggleLocalStorageTheme() {
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.setItem("theme", "light-theme");
    }
}

function setFullDarkTheme() {
    document.body.classList.toggle('dark-theme');
    archiveBtn.classList.toggle('btn-dark');
    deleteSuggestionBtn.classList.toggle('btn-dark');
    selectSuggestionBtn.classList.toggle('btn-dark');
    createBtn.classList.toggle('btn-dark');
    saveNewAssemblyBtn.classList.toggle('btn-dark');
    toggleStyle(searchSuggestionField, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(searchSuggestionField, 'color', 'rgb(190, 190, 190)', 'black');
    toggleStyle(searchFilmField, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(searchFilmField, 'color', 'rgb(190, 190, 190)', 'black');
    toggleSrc(logo, '/assets/img/logo_white.png', '/assets/img/logo_black.png');
    toggleStyle(bodyHidden, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(bodyHidden, 'color', 'rgb(190, 190, 190)', 'black');
}

if (currentTheme === "dark-theme") {
    setFullDarkTheme();
}

btn.addEventListener('click', function() {
    setFullDarkTheme();
    toggleLocalStorageTheme();
})

// searchFilmField.addEventListener('input', function() {
//     console.log(searchResult.style)
//     searchResult.style.display = "inline"
// })