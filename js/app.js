let headerElement;
let lastScrollPos = 0;
document.addEventListener("DOMContentLoaded", () => {
    headerElement = document.querySelector("header");
    window.addEventListener("scroll",anchorHeader);
});

function anchorHeader (event) {
    //console.log(window.pageYOffset);
    // if (lastScrollPos != window.pageYOffset) {
    //     if (window.pageYOffset > 100) {
    //         headerElement.classList.add("-overlay");
    //         headerElement.classList.remove("-anchored");
    //     } else if (window.pageYOffset < 10) {
    //         headerElement.classList.add("-anchored");
    //         headerElement.classList.remove("-overlay");
    //     }
    // }
    lastScrollPos = window.pageYOffset;
}