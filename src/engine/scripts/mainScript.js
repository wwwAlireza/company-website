/**********
    coded by alireza mohammadi ;
    github: github.com/wwwAlireza ;
    codepen: codepen.io/alireza82 ;
    linkedin: linkedin.com/in/wwwAlireza ;
    email: alireza.mhm02@gmail.com ;
**********/

"use strict";
// scroll
const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
    if (window.scrollY >= 60) {
        fixedHeader(true);
    } else {
        fixedHeader(false);
    }
});

function fixedHeader(condition) {
    if (condition) {
        header.classList.add("fixedHeader");
    } else {
        header.classList.remove("fixedHeader");
    }
}

function scrollToSection(where) {
    if (where == "home") {
        window.scrollTo(0, 0)
    } else {
        window.scrollTo(0, document.querySelector(where).offsetTop + 50)
    }
}


// set false draggable
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("draggable", "false")
}

// full screen
function fullScreen(id) {
    id = document.querySelector(id);
    if (id.requestFullscreen) {
        id.requestFullscreen();
    } else if (id.webkitRequestFullscreen) {
        id.webkitRequestFullscreen();
    } else if (id.msRequestFullscreen) {
        id.msRequestFullscreen();
    }
}

// hamburger menu
const hamburgerBtn = document.querySelector(".hamburger-menu-button");
const hamburgerMenu = document.querySelector(".hamburger-menu")
var hamburgerMenuStatus = "close";
hamburgerBtn.addEventListener("click", () => {
    checkHamburgerMenu();
})

function checkHamburgerMenu() {
    switch (hamburgerMenuStatus) {
        case "open":
            {
                hamburger.close();
            }
            break;
        case "close":
            {
                hamburger.open();
            }
            break;
    }
}
const hamburger = {
    open: () => {
        hamburgerMenuStatus = "open";
        hamburgerBtn.classList.add("open-hamburger-menu");
        document.querySelector(".header-logo-container").style.opacity = "0";
        hamburgerMenu.classList.add("hamburger-tab-open");
    },
    close: () => {
        hamburgerMenuStatus = "close";
        hamburgerBtn.classList.remove("open-hamburger-menu");
        document.querySelector(".header-logo-container").style.opacity = "1";
        hamburgerMenu.classList.remove("hamburger-tab-open");
    }
}