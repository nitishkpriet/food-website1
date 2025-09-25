// Initialize AOS (Animate On Scroll) after the library is loaded
document.addEventListener('DOMContentLoaded', function () {
    if (window.AOS) {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    } else {
        console.warn('AOS library not found. Make sure AOS script is included before script.js');
    }
});