import { estAdn } from "./TD-ADN.ts";
import { transcrit } from "./TD-ARN.ts";
import { baseComplementaire } from "./TD-Base-Comp.ts";

const adn_correct: string = "ACGGTAGCTAGTTTCGACTGGAGGGGTA";
const adn_noncorrect: string = "ACGGTAGCTAGTTTCGACTGGAGGGGTZ";

console.log("test de la fonction avec "+adn_correct+" attendu true")
console.log((estAdn(adn_correct))?"valide":"Non valide")
console.log("test de la fonction avec "+adn_noncorrect+" attendu false")
console.log(estAdn(adn_noncorrect))
console.log("test de la fonction avec un chiffre attendu false")
console.log(estAdn("1"))


const adn = "ACGGTAGCTAGTTTCGACTGGAGGGGTA"
const arn = "ACGGUAGCUAGUUUCGACUGGAGGGGUA"

console.log("test de la fonction transcrit avec "+adn+" attendu "+arn)
console.log((transcrit(adn)==arn)?"valide":"Non valide")

const testG = "G"
const testC = "C"
const testDeuxCarac = "CC"

console.log("test de la fonction baseComplementaire avec "+testG+" attendu "+testC)
console.log((baseComplementaire(testG)==testC)?"valide":"Non valide")

console.log("test de la fonction baseComplementaire avec "+testDeuxCarac+" attendu "+"")
console.log((baseComplementaire(testDeuxCarac)=="")?"valide":"Non valide")