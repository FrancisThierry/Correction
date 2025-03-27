// A partir d'une chaîne représentant une séquence ADN, on peut construire une chaîne représentant une
// séquence ARN en remplaçant toutes les bases T par des bases U, les autres bases restant inchangées.

// Question
// Écrivez une fonction transcrit qui retourne la séquence ARN sous forme de chaîne de caractères
// correspondant à la séquence ADN sous forme de chaîne de caractères passée en paramètre. Par exemple,
// l'appel

const adn_correct: string = "ACGGTAGCTAGTTTCGACTGGAGGGGTA";
const arn: string = "ACGGUAGCUAGUUUCGACUGGAGGGGUA";

export function transcrit(chaine_carac: string): string {
  let resultat: string = "";
  let arn_array: string[] = []

  for (let index = 0; index < chaine_carac.length; index++) {
    const caractere = chaine_carac[index];
    if (caractere == "T") {
        arn_array.push("U");
      resultat += "U";
    } else {
        arn_array.push(caractere);
      resultat += caractere;
    }
  }

  return resultat;
}

console.log("test de la fonction avec " + adn_correct + " attendu " + arn);
console.log(transcrit(adn_correct));
console.log((transcrit(adn_correct)==arn)? "test reussi": "test echoué");

