'use strict'

let navScroll = (line) => {
    document.addEventListener('scroll', () => styleChange(line));

    function styleChange(line) {
        if (window.scrollY > 120) {
            line.style.opacity = 1;
        } else {
            line.style.opacity = 0;
        }
    }
}

window.onload = function() {
    navScroll(
        document.getElementById('navScrollLine'),
    );
}