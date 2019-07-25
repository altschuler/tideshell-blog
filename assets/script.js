window.onscroll = function changeNav() {
    if (window.scrollY > 50) {
        document.body.className = 'collapse';
    } else {
        document.body.className = '';
    }
};
