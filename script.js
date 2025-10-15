'use strict'

const nav = document.querySelector("nav");
const hamburgerMenu = document.querySelector("#hamburgerMenu");
    
/* function to toggle navigation and dark mode */
function dynamicToggle() {
    /* get element from dom */
const themeToggle = document.querySelector("#themeToggle");
const body = document.documentElement;
    const ulLinks = nav.querySelectorAll('a');

    
    /* open nav */
    hamburgerMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        /* aria-expanded logic for accessibility*/
        const expanded = hamburgerMenu.getAttribute("aria-expanded") === 'true';
        hamburgerMenu.setAttribute("aria-expanded", !expanded);
        nav.classList.toggle('active');  
    });
/* hamburger ends */

    /* close nav on click of links */
    ulLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();});
    });


/* load saved theme from local storage */
    const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'darkMode') {
    body.classList.add('darkMode');
};
/* toggle dark mode */
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("darkMode");
        if (body.classList.contains('darkMode')) {
            localStorage.setItem('theme', "darkMode");
        } else {
            localStorage.removeItem('theme');
        }
    }); 
};
dynamicToggle();

/* close nav when user clicks outside it */
document.addEventListener("click", (e) => {
  
    const navOpen = nav.classList.contains('active');
    const clickedToggle = hamburgerMenu.contains(e.target);
    const clickedNav = nav.contains(e.target);

    /* check if nav menu is open and user  clicks outside my nav || !nav button then close nav, reset attribute*/
    if (navOpen && !clickedNav && !clickedToggle) {
        closeMenu();
    };
});

/* reusable function */
function closeMenu(){
    nav.classList.remove('active');
    hamburgerMenu.setAttribute('aria-expanded', "false");
};