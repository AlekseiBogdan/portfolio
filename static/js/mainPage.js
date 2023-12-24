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

let changeMode = (check, navLine) => {
    check.addEventListener('change', () => changeStyle())
    const video_light = document.getElementsByClassName('white_mode');
    const video_dark = document.getElementsByClassName('dark_mode');
    const navBars = document.getElementsByTagName('nav');
    const mainMode = document.getElementsByClassName('mainMode');
    const otherMode = document.getElementsByClassName('otherMode');
    const projectsHeader = document.getElementsByClassName('projectsHeader');
    const projects = document.getElementsByClassName('projects');
    const randomThings = document.getElementsByClassName('randomThings');
    const projectsAndSwitcher = document.getElementsByClassName('projectsAndSwitcher');
    const feedback = document.getElementsByClassName('feedback');
    const welcome_vid = document.getElementsByClassName('welcome_video');
    const contactsDark = document.getElementsByClassName('darkmodeContacts');
    const contactsWhite = document.getElementsByClassName('contactsWrapper')
    const animatedMentalPosters = document.getElementsByClassName('animatedPosters');
    const animatedCartoonPosters = document.getElementsByClassName('cartoonAnimatedPosters');
    const mobileText = document.getElementsByClassName('mobile_text');
    const mobileImageFirst = document.getElementById('mobile_text_image_first');
    const mobileImageSecond = document.getElementById('mobile_text_image_second');
    const contactsMobile = document.getElementsByClassName('contacts_mobile_wrapper')[0].getElementsByTagName('a');
    const svgContacts = document.getElementsByClassName('behanceSVG');
    const mobileNav = document.getElementsByClassName('mobile_nav')[0].getElementsByTagName('a');
    const animatedPostersSignal = document.getElementsByClassName('animatedPostersSignal');
    const animatedPostersBeat = document.getElementsByClassName('animatedBeatPosters');

    var timerId

    function changeStyle() {

        if (check.checked == true) {
            document.body.style.background = 'var(--darkmode-bg-color)';
            if (window.screen.availWidth > 1365 && window.devicePixelRatio < 1.25) {
                video_light[0].style.display = 'none';
                video_dark[0].style.display = 'block';
                contactsWhite[0].style.display = 'none';
                contactsDark[0].style.display = 'flex';
                welcome_vid[0].style.display = 'none';
                navBars[0].style.display = 'none';
                navBars[1].style.display = 'block';
            } else {
                navBars[0].getElementsByTagName('a')[0].style.color = 'white';
                for (let nav of mobileNav) {
                    nav.style.color = 'white';
                }
                for (let item of contactsMobile) {
                    item.style.color = 'white';
                }
                svgContacts[svgContacts.length-1].style.fill = 'white';
                mobileText[0].style.color = '#fff';
                mobileImageFirst.style.display = 'none';
                mobileImageSecond.style.display = 'inline';
            }
                navLine.style.border = '1px solid #303030';
                mainMode[0].style.display = 'none';
                mainMode[1].style.display = 'block';
                otherMode[0].style.display = 'none';
                otherMode[1].style.display = 'block';
                projectsHeader[0].style.display = 'none';
                projectsHeader[1].style.display = 'block';
                projects[0].style.display = 'none';
                randomThings[0].style.cssText = 'display: flex; flex-wrap: wrap; gap: 20px;';
                feedback[0].style.display = 'none';
                
                
            

            let i = 0;
            let t = 0;
            let b = 0;
            timerId = setInterval(() => {
                if (i > 0) {
                    animatedMentalPosters[i-1].style.zIndex = '-1';
                    animatedCartoonPosters[i-1].style.zIndex = '-1';
                }
                animatedMentalPosters[i].style.zIndex = '1';
                animatedCartoonPosters[i].style.zIndex = '1';

                if (i === 4) {
                    i -= 5;
                    animatedMentalPosters[4].style.zIndex = '-1';
                    animatedCartoonPosters[4].style.zIndex = '-1';
                }

                if (t > 0) {
                    animatedPostersSignal[t-1].style.zIndex = '-1';
                }
                animatedPostersSignal[t].style.zIndex = '1';
                
                if (t === 5) {
                    t -= 6;
                    animatedPostersSignal[5].style.zIndex = '-1';
                }

                if (b > 0) {
                    animatedPostersBeat[b-1].style.zIndex = '-1';
                }
                console.log(animatedPostersBeat[b]);
                console.log(b);
                animatedPostersBeat[b].style.zIndex = '1';

                if (b === 2) {
                    b -= 3;
                    animatedPostersBeat[2].style.zIndex = '-1';
                }

                ++i;
                ++t;
                ++b;
            }, 750);
        } else {
            document.body.style.background = 'var(--main-bg-color)';
            if (window.screen.availWidth > 1365 && window.devicePixelRatio < 1.25) {
                video_light[0].style.display = 'block';
                video_dark[0].style.display = 'none';
                contactsWhite[0].style.display = 'flex';
                contactsDark[0].style.display = 'none';
                welcome_vid[0].style.display = 'block';
                navBars[0].style.display = 'block';
                navBars[1].style.display = 'none';
            } else {
                navBars[0].getElementsByTagName('a')[0].style.color = 'black';
                for (let nav of mobileNav) {
                    nav.style.color = 'black';
                }
                for (let item of contactsMobile) {
                    item.style.color = 'black';
                }
                svgContacts[svgContacts.length-1].style.fill = 'black';
                mobileText[0].style.color = '#000';
                mobileImageFirst.style.display = 'inline';
                mobileImageSecond.style.display = 'none'
            }
            
            navLine.style.border = '1px solid #DADADA';
            mainMode[0].style.display = 'inline';
            mainMode[1].style.display = 'none';
            otherMode[0].style.display = 'inline';
            otherMode[1].style.display = 'none';
            projectsHeader[0].style.display = 'block';
            projectsHeader[1].style.display = 'none';
            projects[0].style.display = 'block';
            randomThings[0].style.display = 'none';
            feedback[0].style.display = 'block';
            clearInterval(timerId);
            
        }
    }
}

let formProcessing = function(placeholder, name, contacts, textarea) {
    textarea.addEventListener('input', () => changeHeight())
    textarea.addEventListener('focusout', () => validate(textarea, 2))
    name.addEventListener('focusout', () => validate(name, 0))
    contacts.addEventListener('focusout', () => validate(contacts, 1))
    function validate(formEl, numb) {

        if (formEl.value) {
            placeholder[numb].style.display = 'none';
        }
    }

    function changeHeight() {
        textarea.style.height = '50px';
        textarea.style.height = textarea.scrollHeight -28 + 'px';
    }

}

// let resetForm = (button, placeholders) => {
//     button.addEventListener('click', () => reset())

//     function reset() {
//         for (let i of placeholders) {
//             i.style.display = 'block';
//         }
//     }
// }

window.onload = function() {
    const navLine = document.getElementById('navScrollLine');
    navScroll(
        navLine,
    );
    changeMode(
        document.getElementById('switch'),
        navLine,
    );
    formProcessing(
        document.getElementsByClassName('placeholder'),
        document.getElementById('name'),
        document.getElementById('contactsInput'),
        document.getElementById('message'),
    );
    // resetForm(
    //     document.getElementById('submit-btn'),
    //     document.getElementsByClassName('placeholder')
    // );
}