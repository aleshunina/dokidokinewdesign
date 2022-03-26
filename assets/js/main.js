const btn = document.getElementById("flexSwitchCheckDefault");
const archiveBtn = document.getElementById('archiveBtn');
const searchField = document.getElementById('exampleFormControlInput1');
const logo = document.getElementById('logo');

function toggleStyle(element, attrib, style1, style2) {
    if (element.style[attrib] === null) {
        element.style[attrib] = style1;
    }
    if(element.style[attrib] === style1) {
        element.style[attrib] = style2;
    } else {
        element.style[attrib] = style1;
    }
  }

function toggleSrc(element, src1, src2) {
    if(element.src.includes(src1)) {
        element.src = src2;
    } else {
        element.src = src1;
    }
}

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    archiveBtn.classList.toggle('btn-dark');
    toggleStyle(searchField, 'backgroundColor', 'rgb(73, 77, 80)', 'rgb(255, 255, 255)');
    toggleStyle(searchField, 'color', 'rgb(190, 190, 190)', 'black');
    toggleSrc(logo, '/assets/img/logo_white.png', '/assets/img/logo_black.png')
})