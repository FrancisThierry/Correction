// Caractères
// Ecrire une classe Caractère permettant de conserver un caractère. Elle disposera :
// d'un constructeur à un paramètre fournissant le caractère à conserver (par défaut, le caractère à
// conserver sera un espace);
// d'une méthode estVoyelle fournissant la valeur {\tt vrai} lorsque le caractère concerné est une voyelle
// et la valeur {\tt faux} sinon ;
// Ecrire un petit programme utilisant cette classe.
var Caractere = /** @class */ (function () {
    function Caractere(char) {
        if (char === void 0) { char = ' '; }
        this.aChar = char;
    }
    Caractere.prototype.estVoyelle = function () {
        var voyelles = 'aeiouAEIOU';
        var left = 0;
        var right = voyelles.length - 1;
        while (left <= right) {
            var mid = Math.floor((left + right) / 2);
            if (this.aChar === voyelles[mid]) {
                return true;
            }
            else if (this.aChar < voyelles[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return false;
    };
    return Caractere;
}());
console.log('TD Caractères');
// Exemple d'utilisation de la classe Caractere
var caractere1 = new Caractere('a');
console.log(caractere1.estVoyelle()); // true
var caractere2 = new Caractere('b');
console.log(caractere2.estVoyelle()); // false
var caractere3 = new Caractere();
console.log(caractere3.estVoyelle()); // false (caractère par défaut est un espace)
// Rectangle
// Ecrire une classe Rectangle disposant :
// d'un constructeur dont les arguments sont la longueur et la largeur (par défaut, on fixera une
// longueur et une largeur égales à 1) ;
// d'une méthode périmètre fournissant en résultat le périmètre du rectangle ;
// d'une méthode surface fournissant en résultat la surface du rectangle ;
// d'une méthode agrandir disposant d'un paramètre de type number correspondant à la valeur par
// laquelle il faut multiplier les dimensions du rectangle.
// Ecrire un petit programme utilisant cette classe.
var Rectangle = /** @class */ (function () {
    function Rectangle(longueur, largeur) {
        if (longueur === void 0) { longueur = 1; }
        if (largeur === void 0) { largeur = 1; }
        this.longueur = longueur;
        this.largeur = largeur;
    }
    Rectangle.prototype.perimetre = function () {
        return 2 * (this.longueur + this.largeur);
    };
    Rectangle.prototype.surface = function () {
        return this.longueur * this.largeur;
    };
    Rectangle.prototype.agrandir = function (facteur) {
        this.longueur *= facteur;
        this.largeur *= facteur;
    };
    return Rectangle;
}());
console.log('TD Rectangle');
// Exemple d'utilisation de la classe Rectangle
var rectangle1 = new Rectangle(2, 3);
console.log(rectangle1.perimetre()); // 10
console.log(rectangle1.surface()); // 6
var rectangle2 = new Rectangle();
console.log(rectangle2.perimetre()); // 4
console.log(rectangle2.surface()); // 1
rectangle1.agrandir(2);
console.log(rectangle1.perimetre()); // 20
console.log(rectangle1.surface()); // 24
// Réservoir
// Ecrire une classe nommée Réservoir qui comporte le constructeur et les méthodes publiques suivantes :
// un constructeur qui prend en paramètre un nombre représentant la capacité du réservoir ;
// une méthode verse qui prend en paramètre un nombre représentant la quantité à ajouter au
// réservoir. Si la capacité restante n'est pas suffisante, on ajoute que ce qui est possible. La méthode
// renvoie la quantité qui n'a pas pu éventuellement être ajoutée au réservoir ;
// une méthode puise qui prend en paramètre un entier représentant la quantité que l'on souhaite
// puiser dans le réservoir. La méthode renvoie la quantité effectivement puisée, c'est-à-dire la quantité
// demandée s'il y avait assez de quantité dans le réservoir, sinon la quantité qui était disponible dans le
// réservoir ;
// une méthode jauge qui fournit la quantité présente dans le réservoir.
// Ecrire un petit programme utilisant cette classe.
var Reservoir = /** @class */ (function () {
    function Reservoir(capacite) {
        this.capacite = capacite;
        this.quantite = 0;
    }
    Reservoir.prototype.verse = function (quantite) {
        var espaceRestant = this.capacite - this.quantite;
        if (quantite <= espaceRestant) {
            this.quantite += quantite;
            return 0;
        }
        else {
            this.quantite = this.capacite;
            return quantite - espaceRestant;
        }
    };
    Reservoir.prototype.puise = function (quantite) {
        if (quantite <= this.quantite) {
            this.quantite -= quantite;
            return quantite;
        }
        else {
            var toutCeQuiReste = this.quantite;
            this.quantite = 0;
            return toutCeQuiReste;
        }
    };
    Reservoir.prototype.jauge = function () {
        return this.quantite;
    };
    return Reservoir;
}());
console.log('TD Réservoir');
// Exemple d'utilisation de la classe Réservoir
var reservoir1 = new Reservoir(100);
console.log(reservoir1.jauge()); // 0
console.log(reservoir1.verse(50)); // 0
console.log(reservoir1.jauge()); // 50
console.log(reservoir1.verse(60)); // 10
console.log(reservoir1.jauge()); // 100
console.log(reservoir1.puise(30)); // 30
console.log(reservoir1.jauge()); // 70
console.log(reservoir1.puise(80)); // 70
console.log(reservoir1.jauge()); // 0
