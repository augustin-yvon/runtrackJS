// En résumé, si vous avez besoin de manipuler le DOM immédiatement après sa création et que vous 
// n'avez pas besoin d'attendre le chargement complet des ressources, utilisez DOMContentLoaded. 
// Si vous dépendez du chargement complet de toutes les ressources de la page, utilisez window.onload.

// window.onload = function() {
    
// };

document.addEventListener("DOMContentLoaded", function() {
    var bouton = document.getElementById("button");
    function citation() {
        var citation = document.getElementById("citation");
        console.log(citation.textContent);
    }

    bouton.addEventListener("click", function() {
        citation();
    });
});