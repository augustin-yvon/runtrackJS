$(document).ready(function() { // == $(function() {}); Syntaxe raccourcie
    $('#button').click(function() {
        fetch('expression.txt')
            .then(response => response.text()) // Extraire le contenu du fichier en tant que texte
            .then(data => {
                let balisep = $("<p></p>").text(data);
                $('.container').append(balisep);
            })

            .catch(error => console.log(error));
    });    
});