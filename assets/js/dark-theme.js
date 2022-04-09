const searchSuggestionField = document.getElementById('searchSuggestionField');
const searchFilmField = document.getElementById('searchFilmField');
const bodyHidden = document.getElementById('bodyHidden');

function toggleLocalStorageTheme() {
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.setItem("theme", "light-theme");
    }
}

if (localStorage.getItem("theme") === "dark-theme") {
    setDarkTheme();
}

document.getElementById("flexSwitchCheckDefault").addEventListener('click', function() {
    setDarkTheme();
    toggleLocalStorageTheme();
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

function setDarkTheme() {
    document.body.classList.toggle('dark-theme');
    document.getElementById('archiveBtn').classList.toggle('btn-dark');
    document.getElementById('deleteSuggestionBtn').classList.toggle('btn-dark');
    document.getElementById('selectSuggestionBtn').classList.toggle('btn-dark');
    document.getElementById('createBtn').classList.toggle('btn-dark');
    document.getElementById('saveNewAssemblyBtn').classList.toggle('btn-dark');
    toggleStyle(searchSuggestionField, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(searchSuggestionField, 'color', 'rgb(190, 190, 190)', 'black');
    toggleStyle(searchFilmField, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(searchFilmField, 'color', 'rgb(190, 190, 190)', 'black');
    toggleSrc(document.getElementById('logo'), '/assets/img/logo_white.png', '/assets/img/logo_black.png');
    toggleStyle(bodyHidden, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(bodyHidden, 'color', 'rgb(190, 190, 190)', 'black');
}
