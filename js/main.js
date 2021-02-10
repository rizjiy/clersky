var navbarButton = document.querySelector(".navbar-button");
navbarButton.addEventListener('click', function() {
    console.log("Клик");
    document.querySelector(".header__login")
    .classList.toggle("header__login--visible");
});