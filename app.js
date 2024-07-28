const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",() => {
    navLinks.classList.add("active");
    backdrop.classList.add("active");
});

closeBtn.addEventListener('click',() =>{
    navLinks.classList.remove('active');
    backdrop.classList.remove('active')
})

backdrop.addEventListener('click',() =>{
    navLinks.classList.remove('active');
    backdrop.classList.remove('active')
})