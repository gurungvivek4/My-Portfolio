    document.addEventListener("DOMContentLoaded", function () {
        const menu = document.querySelector(".hamburger-menu");
        const navList = document.querySelector("nav ul");
        const navLinks = document.querySelectorAll("nav ul li a");

        menu.addEventListener("click", function () {
            navList.classList.toggle("show");
        });
        
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navList.classList.remove("show");
            });
        });
    });
