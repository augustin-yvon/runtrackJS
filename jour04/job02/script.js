$(document).ready(function() { // == $(function() {}); Syntaxe raccourcie
    function jsonValueKey(json, key) {
        var jsObject = JSON.parse(json);
        var value = jsObject[key];;
        return value;
    };

    var jsonStr = '{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}';

    $('#button').click(function() {
        console.log("Le nom de l'école est", jsonValueKey(jsonStr, "name"));
        console.log("Elle est situé au", jsonValueKey(jsonStr, "address"), "à", jsonValueKey(jsonStr, "city"));
        console.log("Il y a", jsonValueKey(jsonStr, "nb_staff"), "personnes dans le staff");
        console.log("Et elle à été créée en ", jsonValueKey(jsonStr, "creation"));
    });
});