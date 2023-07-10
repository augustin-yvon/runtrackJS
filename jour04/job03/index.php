<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="script.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div class="container">
            <form action="" method="post">
                <fieldset>
                    <legend>Filtres</legend>

                    <input type="text" name="id" id="id" placeholder="ID">

                    <input type="text" name="nom" id="nom" placeholder="Nom">

                    <select name="type" id="type">
                        <option value="type">Type</option>
                        <option value="normal">Normal</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="electric">Electric</option>
                        <option value="grass">Grass</option>
                        <option value="ice">Ice</option>
                        <option value="fighting">Fighting</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="flying">Flying</option>
                        <option value="psychic">Psychic</option>
                        <option value="bug">Bug</option>
                        <option value="rock">Rock</option>
                        <option value="ghost">Ghost</option>
                        <option value="dragon">Dragon</option>
                        <option value="dark">Dark</option>
                        <option value="steel">Steel</option>
                        <option value="fairy">Fairy</option>
                    </select>

                    <input type="button" name="Filtrer" id="filtrer" value="Filtrer">
                </fieldset>
            </form>

            <div class="result">
                <h1>Pokémon :</h1>
                <ul class="resultList">
                </ul>
            </div>
        </div>
    </body>
</html>