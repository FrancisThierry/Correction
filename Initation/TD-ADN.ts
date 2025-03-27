// ACGGTAGCTAGTTTCGACTGGAGGGGTA

/*
Écrivez une fonction estAdn qui vérifie si la chaîne de caractères passée en paramètre ne contient aucun
autre caractère que A, C, G et T. Cette fonction retourne la valeur true si tel est le cas, et la valeur false
dans le cas contraire. En particulier, elle renvoie true si la chaîne est vide.
*/

export function estAdn(chaine_carac: string): boolean {
  //cas ou la chaine est vide
  if (chaine_carac == "") {
    return true;
  }

  //cas où la chaine n'est pas vide
  // est ce que la chaine contient un autre caractère que A, C, G et T

  for (let index = 0; index < chaine_carac.length; index++) {
    const caractere = chaine_carac[index];
    if (
      caractere == "A" ||
      caractere == "C" ||
      caractere == "G" ||
      caractere == "T"
    ) {
      //   console.log("conforme à la règle");
      continue;
    } else {
      return false;
    }
  }

  return true;
}

// A partir d'une chaîne représentant une séquence ADN, on peut construire une chaîne représentant une
// séquence ARN en remplaçant toutes les bases T par des bases U, les autres bases restant inchangée

export function transcrit(chaine: string): string {
  let result: string = "";

  for (let index = 0; index < chaine.length; index++) {
    const caractere = chaine[index];
    if (caractere == "T") {
      result += "U";
    } else {
      result += caractere;
    }
  }

  return result;
}

// Écrivez une fonction baseComplémentaire qui retourne la base complémentaire de celle passée en
// paramètre. Si le paramètre n'est pas une des bases A, C, G ou T, la fonction retourne la chaîne vide.
// Remarque : une base est représentée par une chaîne de caractères de longueur 1.

export function baseComplementaire(caractere: string): string {
  if (caractere.length > 1) return "";

  if (caractere == "A") {
    return "T";
  }
  if (caractere == "G") {
    return "C";
  }
  if (caractere == "T") {
    return "A";
  }
  if (caractere == "C") {
    return "G";
  }

  return "";
}
