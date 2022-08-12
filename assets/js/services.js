// activation aos
AOS.init();
//nav scroll
let navTop = document.querySelector(".nav-t"),
    navFixed = document.querySelector(".nav-fixed");

window.addEventListener("scroll", function () {
    if (window.scrollY >= navTop.scrollHeight) {
        navFixed.style.position = "fixed";
        navFixed.style.top = "0px";
    } else {
        navFixed.style.position = "unset";
    }
});

//btn up
const scrollToTop = () => {
    const myBody = document.querySelector("HTML");
    myBody.scrollIntoView({
        behavior: "smooth",
    });
};

const setBtnVisibility = () => {
    if (document.documentElement.scrollTop > 500) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

window.addEventListener("scroll", () => {
    setBtnVisibility();
});
