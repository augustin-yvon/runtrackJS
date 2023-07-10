// Lorsque je met les fonctions dans le DOMContentLoaded, elle s'affiche comme non défini et ne fonctionne pas
// En dehors du DOMContentLoaded, cela fonctionne mais je ne comprend pas car le script étant dans le head, 
// le chargement du js se fait avant le html donc ces fonction ne devrait pas être utilisable. J'ai mal compris qqc et jsp laquelle

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}
    
function allowDrop(event) {
    event.preventDefault();
}
    
function drop(event) {
    event.preventDefault();
    var draggedImageId = event.dataTransfer.getData("text/plain");
    var draggedImage = document.getElementById(draggedImageId);
    var targetImage = event.target;
    var container = targetImage.parentNode;
    
    container.replaceChild(draggedImage, targetImage);
    container.insertBefore(targetImage, draggedImage);
}


// document.addEventListener("DOMContentLoaded", function() {
var shuffle = document.getElementById('melanger');

shuffle.addEventListener('click', function() {
    var arcenciel = document.querySelector('.arcenciel'); // Récupére la div arc-en-ciel
    var img = arcenciel.querySelectorAll('img'); // Récupére les images de la div sous forme de liste NodeList
    var imgTab = Array.from(img); // Transforme la NodeList en tableau

    // Mélange les éléments du tableau
    imgTab.sort(function() {
        return Math.random() - 0.5;
    });

    // Ajoute chaque image à la fin de la div
    imgTab.forEach(function(image) {
        arcenciel.appendChild(image);
    });
});
// });