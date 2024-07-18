/* const THRESHOLD = 15;

function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
}

function resetStyles(e) {
    e.currentTarget.style.transform = 'perspective(0) rotateX(0deg) rotateY(0deg)';
}

document.addEventListener("DOMContentLoaded", function() {
    const effetElements = document.querySelectorAll(".effet");

    effetElements.forEach(function(effet) {
        effet.addEventListener("mousemove", handleHover);
        effet.addEventListener("mouseleave", resetStyles);
    });
});
 */