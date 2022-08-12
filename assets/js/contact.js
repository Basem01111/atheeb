//// activation aos
AOS.init();
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
