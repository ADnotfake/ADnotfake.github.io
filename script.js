function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark-mode');
    const iconMorph = document.querySelector('.icon-morph');
    if (iconMorph) {
        iconMorph.classList.add('spinning');
        setTimeout(() => {
            iconMorph.classList.remove('spinning');
        }, 500);
    }
    if (html.classList.contains('dark-mode')) {
        localStorage.setItem('themeMode', 'dark');
    } else {
        localStorage.setItem('themeMode', 'light');
    }
}

function togglePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('popup-overlay');
    if (popup.classList.contains('open')) {
        popup.classList.remove('open');
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }, 300);
    } else {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        void popup.offsetWidth;
        popup.classList.add('open');
    }
}

function toggleAboutMePopup() {
    const aboutMePopup = document.getElementById('aboutme-popup');
    const overlay = document.getElementById('popup-overlay');
    if (aboutMePopup.classList.contains('open')) {
        aboutMePopup.classList.remove('open');
        aboutMePopup.classList.add('closing');
        setTimeout(() => {
            aboutMePopup.style.display = 'none';
            overlay.style.display = 'none';
            aboutMePopup.classList.remove('closing');
        }, 300);
    } else {
        aboutMePopup.style.display = 'block';
        overlay.style.display = 'block';
        void aboutMePopup.offsetWidth;
        aboutMePopup.classList.add('open');
    }
}

function closeAllPopups() {
    const popup = document.getElementById('popup');
    const aboutMePopup = document.getElementById('aboutme-popup');
    const overlay = document.getElementById('popup-overlay');
    let anyOpen = false;
    if (popup && popup.classList.contains('open')) {
        popup.classList.remove('open');
        popup.classList.add('closing');
        anyOpen = true;
        setTimeout(() => {
            popup.style.display = 'none';
            popup.classList.remove('closing');
        }, 300);
    }
    if (aboutMePopup && aboutMePopup.classList.contains('open')) {
        aboutMePopup.classList.remove('open');
        aboutMePopup.classList.add('closing');
        anyOpen = true;
        setTimeout(() => {
            aboutMePopup.style.display = 'none';
            aboutMePopup.classList.remove('closing');
        }, 300);
    }
    if (anyOpen) {
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('popup-overlay');
        if (popup && popup.style.display === 'block') {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
        const aboutMePopup = document.getElementById('aboutme-popup');
        if (aboutMePopup && aboutMePopup.style.display === 'block') {
            aboutMePopup.classList.remove('open');
            aboutMePopup.classList.add('closing');
            setTimeout(() => {
                aboutMePopup.style.display = 'none';
                overlay.style.display = 'none';
                aboutMePopup.classList.remove('closing');
            }, 300);
        }
    }
});

function setInitialTheme() {
    const savedMode = localStorage.getItem('themeMode');
    const html = document.documentElement;
    if (savedMode === 'dark') {
        html.classList.add('dark-mode');
    } else {
        html.classList.remove('dark-mode');
    }
}

window.addEventListener('DOMContentLoaded', setInitialTheme);
