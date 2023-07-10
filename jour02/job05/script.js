document.addEventListener("DOMContentLoaded", function() {
    
    document.addEventListener('scroll', function() {
        var footer = document.querySelector('footer');
        var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        var hue = Math.floor((scrollPercentage / 100) * 120); // Valeur de teinte entre 0 et 120
        
        footer.style.backgroundColor = 'hsl(' + hue + ', 100%, 50%)';
    });
});