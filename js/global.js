const hamburger = document.querySelector(".hamburger");
const mNav = document.querySelector(".nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('open');
    mNav.classList.toggle('open')
});
