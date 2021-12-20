const modal = document.querySelector('.modal');
const contactLink = document.querySelector('.contact-link');
const overlay = document.querySelector('.overlay');

document.addEventListener('click', (e) => {
    if(e.target === contactLink){
        modal.style.display = "block";
        overlay.style.display = "flex";
    }
});

document.addEventListener('click', (e) => {
    if(e.target === overlay){
        modal.style.display = "none";
        overlay.style.display = "none";
    }
});