// Question
// Ecrivez une fonction nommée nombreOccurrencesCodon qui calcule le nombre de fois que le codon
// (représenté par une chaîne de 3 caractères) passé en paramètre apparaît dans la séquence ARN également
// passée en paramètre. On suppose que la longueur de la séquence ARN est un multiple de 3. Par exemple,
// l'appel

export function nombreOccurrencesCodon(codon: string, arn: string): number {   
    let resultat: number = 0;
    let index: number = 0;
    let longueur: number = arn.length;
    while (index < longueur) {
        let currentCodon = arn[index] + arn[index + 1] + arn[index + 2];
        if (currentCodon == codon) {
            resultat++;
        }
        index += 3;
    }
    return resultat;
}

// const test_codon: string = "ACG";
// const test_arn: string = "GCUACGGAGCUUCGGAGCACGUAG";
// const test_resultat: number = 2;

// console.log("test de la fonction avec " + test_codon + " et " + test_arn + " attendu " + test_resultat);
// console.log(nombreOccurrencesCodon(test_codon, test_arn));
// console.log((nombreOccurrencesCodon(test_codon, test_arn)==test_resultat)? "test reussi": "test echoué");