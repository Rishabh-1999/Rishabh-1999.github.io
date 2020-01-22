function perloadfunction() {
    var load = document.getElementById('loading');
    loading.style.display = 'none';

}

$(document).ready(() => {
    var typed = new Typed('.typed', {
        strings: ['Student.', 'Web Developer.', 'Android Developer.', 'Coder.', 'Indian.'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});

$(document).bind("contextmenu", function (e) {
    e.preventDefault();
});

$(document).keydown(function (e) {
    if (e.which === 123) {
        return false;
    }
    if (e.ctrlKey &&
        (e.keyCode === 115 || e.keyCode === 83)) {
        return false;
    }
    if (e.ctrlKey && (e.shiftkey) &&
        (e.keyCode === 'i' || e.keyCode === 'I')) {
        return false;
    }
    return true;
});