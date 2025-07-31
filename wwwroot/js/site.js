// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const header = document.getElementById("animated-header");

let hue = 0;
function animateHeader() {
    hue = (hue + 1) % 360;
    header.style.color = `hsl(${hue}, 100%, 70%)`;
    requestAnimationFrame(animateHeader);
}

animateHeader();
