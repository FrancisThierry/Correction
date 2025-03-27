// Séquences complémentaires
// Dans les cellules vivantes, l'ADN est sous la forme de brin, c'est-à-dire 2 séquences ADN se font face. Une
// séquence est lue de gauche à droite et l'autre de droite à gauche. De plus, les bases complémentaires se
// font face l'une l'autre. Par exemple, les 2 séquences suivantes sont complémentaires inversées l'une par
// rapport à l'autre et peuvent ainsi former un double brin : GTACA et TGTAC.
// Question
// Écrire une fonction séquenceComplémentaireInversée qui retourne la séquence ADN complémentaire
// et inversée sous forme de chaîne de caractères de celle passée en paramètre. Vous utiliserez dans cette
// fonction la fonction baseComplémentaire. On suppose que le paramètre est bien une séquence ADN. Par
// exemple, l'appel
import { baseComplementaire } from "./TD-Base-Comp.ts";

// baseComplementaire("A");

export function sequenceComplementaireInversee(chaine: string): string {
  let resultat: string = "";

  for (let index = 0; index < chaine.length; index++) {
    const caractere = chaine[index];
    resultat += baseComplementaire(caractere);
  }

  return reverseString( resultat);
}


function reverseString(str: string): string {
    let resultat: string = "";
    for (let index = str.length - 1; index >= 0; index--) {
        resultat += str[index];
    }
    return resultat;
  
}   

// const test_CAGT = "CAGT";
// const test_ACTG = "ACTG";

// console.log("test de la fonction avec " + test_ACTG + " attendu " + test_CAGT);
// console.log(sequenceComplementaireInversee(test_ACTG));
// console.log((sequenceComplementaireInversee(test_ACTG)==test_CAGT)? "test reussi": "test echoué");