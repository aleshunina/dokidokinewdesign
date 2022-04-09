const searchSuggestionField = document.getElementById('searchSuggestionField');
const searchFilmField = document.getElementById('searchFilmField');
const bodyHidden = document.getElementById('bodyHidden');
const buttonsToDark = ['archiveBtn', 'deleteSuggestionBtn', 'selectSuggestionBtn', 'createBtn', 'saveNewAssemblyBtn'];
const darkGreyRGB =  'rgb(73, 77, 80)';
const lightGreyRGB = 'rgb(190, 190, 190)';


if (localStorage.getItem("theme") === "dark-theme") {
    setDarkTheme();
}

document.getElementById("flexSwitchCheckDefault").addEventListener('click', function() {
    setDarkTheme();
    toggleLocalStorageTheme();
})

function toggleLocalStorageTheme() {
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.setItem("theme", "light-theme");
    }
}

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

function setDarkTheme() {
    document.body.classList.toggle('dark-theme');
    toggleStyle(searchSuggestionField, 'backgroundColor', darkGreyRGB, 'white');
    toggleStyle(searchSuggestionField, 'color', lightGreyRGB, 'black');
    toggleStyle(searchFilmField, 'backgroundColor', darkGreyRGB, 'white');
    toggleStyle(searchFilmField, 'color', lightGreyRGB, 'black');
    toggleSrc(document.getElementById('logo'), '/assets/img/logo_white.png', '/assets/img/logo_black.png');
    toggleStyle(bodyHidden, 'backgroundColor', darkGreyRGB, 'white');
    toggleStyle(bodyHidden, 'color', lightGreyRGB, 'black');


    buttonsToDark.map(button => {
        return document.getElementById(button).classList.toggle('btn-dark');
    })
}
