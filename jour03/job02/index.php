<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="script.js" defer></script>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <button id="melanger">Mélanger</button>
        <div class="container">
            <div class="arcenciel" ondragover="allowDrop(event)" ondrop="drop(event)">
                <img id="arc1" src="img/arc1.png" alt="arc1" draggable="true" ondragstart="dragStart(event)">
                <img id="arc2" src="img/arc2.png" alt="arc2" draggable="true" ondragstart="dragStart(event)">
                <img id="arc3" src="img/arc3.png" alt="arc3" draggable="true" ondragstart="dragStart(event)">
                <img id="arc4" src="img/arc4.png" alt="arc4" draggable="true" ondragstart="dragStart(event)">
                <img id="arc5" src="img/arc5.png" alt="arc5" draggable="true" ondragstart="dragStart(event)">
                <img id="arc6" src="img/arc6.png" alt="arc6" draggable="true" ondragstart="dragStart(event)">
            </div>
            <div class="remplissage"></div>
        </div>
    </body>
</html>