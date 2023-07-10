document.addEventListener("DOMContentLoaded", function() {
    var article = document.getElementById('article');
    article.style.display = "none";

    var button = document.getElementById('button');

    function showhide(element) {
        if (element.style.display === "none") {
            element.style.display = "block";
        }else{
            article.style.display = "none";
        }
    }

    button.addEventListener('click', function() {
        showhide(article);
    });
});