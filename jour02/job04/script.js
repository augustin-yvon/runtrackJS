document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById('keylogger');

    document.addEventListener('keydown', function(event) {
    var keyPressed = event.key.toLowerCase();
    var currentFocus = document.activeElement;

    if (/^[a-z]$/.test(keyPressed)) {
        if (currentFocus === textarea) {
            textarea.value += keyPressed;
        } else {
            textarea.value += keyPressed;
        }
    }
    });
});