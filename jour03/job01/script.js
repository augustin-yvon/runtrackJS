document.addEventListener("DOMContentLoaded", function() {
    var phrase = document.getElementById('texte');
    phrase.style.display = "none";

    var cacher = document.getElementById('cacher');
    var montrer = document.getElementById('montrer');

    
    cacher.addEventListener('click', function() {
        phrase.style.display = "none";
    })
    montrer.addEventListener('click', function() {
        phrase.style.display = "block";
    })
});