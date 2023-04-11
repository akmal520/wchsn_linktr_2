// const video = document.getElementById('myVid');
// const container = document.querySelector('.container');

// const tahun = new Date().getFullYear();
// const footer = document.getElementById('tahun');

const icon = document.getElementById('icon');

// window.addEventListener('load', () => {
    
//     video.play();

//     document.body.addEventListener('click', () => {

//         video.muted = false;
//     });

//     video.addEventListener('ended', function(e) {
//         container.style.display = 'block';
//     }, false);

//     footer.innerHTML = tahun;

// });

icon.onclick = () => {
    document.body.classList.toggle('color-dark');
    if(document.body.classList.contains('color-dark')) {
        icon.className = "fa-solid fa-moon";
    } else {
        icon.className = "fa-solid fa-sun";
    }
}
