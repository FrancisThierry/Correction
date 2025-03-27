let year:number = 0
const monthValue:number = 2
const month:string = "febrary"

// le mois de février équivaut à 2

// console.log("le mois de "+month+" équivaut à "+monthValue)



function displayFebraryNumber() {
    console.log(2)
}


displayFebraryNumber()


const userValue: string  = prompt("Entrez un mois en chiffre") || "";

const userMonth: number = parseInt(userValue);
console.log("Le mois correspondant est " + monthNumberByName(userMonth));




// ectire une fonction qui affiche le mois en fonction du parametre entier passé


function monthNumberByName(month:number):string{
    switch(month){
        case 1:
            return "janvier"
        case 2:
            return "fevrier"
        case 3:
            return "mars"
        case 4:
            return "avril"
        case 5:
            return "mai"
        case 6:
            return "juin"
        case 7:
            return "juillet"
        case 8:
            return "aout"
        case 9:
            return "septembre"
        case 10:
            return "octobre"
        case 11:
            return "novembre"
        case 12:
            return "decembre"
        default:
            return "mois invalide"
    }
}


// Créer en utilisant une boucle une fonction qui remplit un tableau avec le mois et le jour qui lui correspond

let arrayEmpty:number[] = []
let monthArray: string[] = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]

for (let i = 0; i < monthArray.length; i++) {

    console.log(monthArray[i])
}

arrayEmpty.push(1)
arrayEmpty.pop()
   



// console.log(monthArray[0])