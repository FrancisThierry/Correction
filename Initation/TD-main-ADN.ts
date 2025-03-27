// En utilisant les fonctions définies dans les questions précédentes, écrivez un programme qui, dans un
// premier temps, demande à l'utilisateur d'entrer une séquence ADN et un codon, puis qui affiche les
// séquences complémentaires inversées et ARN associées à la séquence ADN saisie. Enfin, le programme
// devra afficher le nombre d'occurrences du codon dans la séquence ARN. Si l'utilisateur entre une séquence
// ADN erronée, le programme se contentera de signaler une erreur dans la séquence.
// Un exemple d'exécution avec une séquence ADN correcte est :



// import { baseComplementaire } from "./TD-Base-Comp.ts";
import { transcrit } from "./TD-ARN.ts";
import { nombreOccurrencesCodon } from "./TD-Codon.ts";
import { sequenceComplementaireInversee } from "./TD-Inverse.ts";

const userChoice = prompt("Veuillez entrer une séquence ADN : ");
const codon = prompt("Veuillez entrer un codon : ");

if (userChoice == null || codon == null) {
  console.log("Erreur dans la séquence");
} else {
  const sequenceComplementaire = sequenceComplementaireInversee(userChoice);
  const arn = transcrit(userChoice);
  const nbOccurences = nombreOccurrencesCodon(codon, arn);

  progPrincipal(sequenceComplementaire, arn, nbOccurences);
}











function progPrincipal(sequenceComplementaire: string, arn: string, nbOccurences: number) {
    console.log(
        "La séquence complémentaire inversée est : " + sequenceComplementaire
    );
    console.log("La séquence ARN associée est : " + arn);
    console.log(
        "Le nombre d'occurrences du codon " +
        codon +
        " dans la séquence ARN est : " +
        nbOccurences
    );
}

