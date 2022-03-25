const btn = document.getElementById("flexSwitchCheckDefault");
const archiveBtn = document.getElementById('archiveBtn');

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (archiveBtn.classList.contains('btn-light')) {
        archiveBtn.classList.add('btn-dark'); 
        archiveBtn.classList.remove('btn-light');
    } else if (archiveBtn.classList.contains('btn-dark')) {
        archiveBtn.classList.remove('btn-dark');
        archiveBtn.classList.add('btn-light');
    }
})