// Skal returnerer true hvis tallene er ens, ellers false
function erEns(a, b, c) {
  // AND i JavaScript: &&
  // OR i JavaScript: ||
  if (a == b && b == c) {
    return true;
  } else {
    return false;
  }
}
console.log("erEns", erEns(1,2,3));
console.log("erEns", erEns(3,3,3));

// Skal returnere true hvis hvert tal er større end det foregående
// Dvs. a < b < c. Ellers returneres false.
function erStigende(a, b, c) {
  if (a < b && b < c) {
    return true;
  } else {
    return false;
  }
}
console.log("erStigende", erStigende(1,2,3));
console.log("erStigende", erStigende(1,3,2));

function erStigende2(a, b, c) {
  if (a < b) {
    if (b < c) {
      return true;
    }
  }
  return false;
}

function erStigende3(a, b, c) {
  return a < b && b < c;
}



// En funktion der returnerer true hvis talene er sorteret
// enten i stigende eller faldende orden. Ellers false.
// Fx er 3,2,1 true, 1,2,3 er også true, men 1,3,2 er false. 
function erSorteret(a, b, c) {
  if (a < b && b < c) {
    
    // TODO: Tjek også om faldende

  } else {
    return false;
  }
}

console.log("erSorteret", erSorteret(1,2,3));
console.log("erSorteret", erSorteret(3,2,3));