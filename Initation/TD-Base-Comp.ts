// Les bases A et T sont dites complémentaires, ainsi que les bases G et C

// Écrivez une fonction baseComplémentaire qui retourne la base complémentaire de celle passée en
// paramètre. Si le paramètre n'est pas une des bases A, C, G ou T, la fonction retourne la chaîne vide.
// Remarque : une base est représentée par une chaîne de caractères de longueur 1.



export function baseComplementaire(chaine: string): string {
  // une base est représentée par une chaîne de caractères de longueur 1.

  if (chaine.length != 1) return "";

  if (chaine == "A") return "T";
  if (chaine == "G") return "C";
  if (chaine == "C") return "G";
  if (chaine == "T") return "A";

  return "";
}

const test_A = "A";
const test_G = "G";
const test_H = "H";
const test_vide = "";
const test_deux_carac = "AA";


console.log("test de la fonction avec " + test_A + " attendu " + "T");
console.log(baseComplementaire(test_A));
console.log((baseComplementaire(test_A)=="T")? "test reussi": "test echoué");

console.log("test de la fonction avec " + test_G + " attendu " + "C");
console.log(baseComplementaire(test_G));
console.log((baseComplementaire(test_G)=="C")? "test reussi": "test echoué");

console.log("test de la fonction avec " + test_vide + " attendu " + "");
console.log(baseComplementaire(test_vide));
console.log((baseComplementaire(test_vide)=="")? "test reussi": "test echoué");

console.log("test de la fonction avec " + test_deux_carac + " attendu " + "");
console.log(baseComplementaire(test_deux_carac));
console.log((baseComplementaire(test_deux_carac)=="")? "test reussi": "test echoué");

console.log("test de la fonction avec " + test_H + " attendu " + "");
console.log(baseComplementaire(test_H));
console.log((baseComplementaire(test_H)=="")? "test reussi": "test echoué");