$(document).ready(function() { // == $(function() {}); Syntaxe raccourcie
    $('#filtrer').click(function() {
        $('.resultList').empty()
        
        var id = $('input[name="id"]').val();
        var nom = $('input[name="nom"]').val();
        var type = $('select[name="type"]').val();
    
        fetch('pokemon.json')
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Erreur de requête : ' + response.status);
                }
                return response.json();
            })
            .then(function(data) {  
                var pokemonfiltre = filtrerPokemon(data, id, nom, type);
                for (let i = 0; i < pokemonfiltre.length; i++) {
                    let listElement = $("<li></li>").text(pokemonfiltre[i]);
                    $('.resultList').append(listElement);
                }
                pokemonfiltre = [];
            })
            .catch(function(error) {
                console.log(error);
            });
    });
    
    function filtrerPokemon(data, id, nom, type) {
        var pokemonfiltre = [];
    
        for (var i = 0; i < data.length; i++) {
            var pokemon = data[i];


            if (
                (id === '' || pokemon.id.toString() === id) &&
                (nom === '' || pokemon.name.french.toLowerCase().includes(nom.toLowerCase())) &&
                (type === 'type' || typeofPokemon(pokemon.type, type))
            ) {
                pokemonfiltre.push(pokemon.name.french);
            }
        }
        
        return pokemonfiltre;
    }

    function typeofPokemon(pokemon, type) {
        for (let i = 0; i < pokemon.length; i++) {
            if (pokemon[i].toLowerCase() == type) {
                return true;
            }
        }
        return false
    }
});
  