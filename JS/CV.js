// 1. On attend que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. On sélectionne toutes les barres de niveau
    const barres = document.querySelectorAll('.niveau');
    
    // 3. Au départ, on met toutes les barres à 0%
    barres.forEach(function(barre) {
        barre.style.width = '0%';
    });
    
    // 4. Après un petit délai (500ms = 0.5 seconde), on anime
    setTimeout(function() {
        
        // 5. On récupère chaque barre individuellement
        const wolof = document.querySelector('.wolof .niveau');
        const francais = document.querySelector('.francais .niveau');
        const anglais = document.querySelector('.anglais .niveau');
        
        // 6. On change leur largeur à la valeur finale
        wolof.style.width = '100%';
        francais.style.width = '90%';
        anglais.style.width = '65%';
        
    }, 500);
    
});