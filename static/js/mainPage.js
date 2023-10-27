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

let changeMode = (check) => {
    check.addEventListener('change', () => changeStyle())

    let navbar = document.getElementsByTagName('nav')

    function changeStyle() {
        if (check.checked === true) {
            document.body.style.background = 'var(--darkmode-bg-color)';
            navbar[0].style.background = 'var(--darkmode-bg-color)';
        } else {
            document.body.style.background = '#fff';
            navbar[0].style.background = 'var(--main-bg-color)';
        }
    }


}

window.onload = function() {
    navScroll(
        document.getElementById('navScrollLine'),
    );
    changeMode(
        document.getElementById('switch'),
    )
}