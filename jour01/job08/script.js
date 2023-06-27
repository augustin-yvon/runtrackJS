function estpremier(nbr) {
  if (nbr <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(nbr); i++) {
    if (nbr % i === 0) {
      return false;
    }
  }
  
  return true;
}

function sommenombrespremiers(nbr12, nbr2) {
  if (estpremier(nbr12) && estpremier(nbr2)) {
    return nbr12 + nbr2;
  } else {
    return false;
  }
}

// Exemple d'utilisation
console.log(sommenombrespremiers(2, 3)); // Résultat : 5 (2 + 3 est un nombre premier)
console.log(sommenombrespremiers(5, 10)); // Résultat : false (10 n'est pas un nombre premier)
console.log(sommenombrespremiers(11, 13)); // Résultat : 24 (11 + 13 est un nombre premier)
