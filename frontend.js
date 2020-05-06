const accordions = document.getElementsByClassName("accordion");

for (const accordion of accordions) {
    const header = accordion.children[0];
    const paragraph = accordion.children[1];
    paragraph.style.animationName = "accordion-hide";

    header.onclick = () => {
        if (paragraph.style.animationName === "accordion-hide") {
            paragraph.style.animationName = "accordion-show";
        } else {
            paragraph.style.animationName = "accordion-hide";
        }
    }
}

let scrollInt;

document.getElementById("toTopBtn").onclick = () => {
    scrollInt = setInterval(() => {
        window.scrollBy(0, -20)
        if (window.scrollY <= 10) clearInterval(scrollInt);
    }, 10);
}

if (screen.width < 900) {
    document.body.style.fontFamily = "sans-serif";
}
