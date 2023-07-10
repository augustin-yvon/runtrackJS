document.addEventListener("DOMContentLoaded", function() {
    var count = document.getElementById('compteur');
    var nbr = parseInt(count.textContent);

    var button = document.getElementById('button');

    button.addEventListener('click', function addone() {
        count.innerHTML = nbr += 1;
    });
});