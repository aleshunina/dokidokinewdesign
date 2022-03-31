const btn = document.getElementById("flexSwitchCheckDefault");
const archiveBtn = document.getElementById('archiveBtn');
const searchField = document.getElementById('exampleFormControlInput1');
const logo = document.getElementById('logo');
const currentTheme = localStorage.getItem("theme");
const bodyHidden = document.getElementById('bodyHidden');
const deleteSuggestionBtn = document.getElementById('deleteSuggestionBtn');
const selectSuggestionBtn = document.getElementById('selectSuggestionBtn');

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
    toggleStyle(searchField, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(searchField, 'color', 'rgb(190, 190, 190)', 'black');
    toggleSrc(logo, '/assets/img/logo_white.png', '/assets/img/logo_black.png');
    toggleStyle(bodyHidden, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(bodyHidden, 'color', 'rgb(190, 190, 190)', 'black');
    deleteSuggestionBtn.classList.toggle('btn-dark');
    selectSuggestionBtn.classList.toggle('btn-dark');
}

if (currentTheme === "dark-theme") {
    setFullDarkTheme();
}

btn.addEventListener('click', function() {
    setFullDarkTheme();
    toggleLocalStorageTheme();
})