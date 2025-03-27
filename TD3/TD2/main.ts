// Caractères
// Ecrire une classe Caractère permettant de conserver un caractère. Elle disposera :
// d'un constructeur à un paramètre fournissant le caractère à conserver (par défaut, le caractère à
// conserver sera un espace);
// d'une méthode estVoyelle fournissant la valeur {\tt vrai} lorsque le caractère concerné est une voyelle
// et la valeur {\tt faux} sinon ;
// Ecrire un petit programme utilisant cette classe.

class Caractere {
  aChar: string;
  constructor(char = " ") {
    this.aChar = char;
  }

  estVoyelle() {
    const voyelles = "aeiouAEIOU";
    let left = 0;
    let right = voyelles.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.aChar === voyelles[mid]) {
        return true;
      } else if (this.aChar < voyelles[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }
}

console.log("TD Caractères");

// Exemple d'utilisation de la classe Caractere
const caractere1 = new Caractere("a");
console.log(caractere1.estVoyelle()); // true

const caractere2 = new Caractere("b");
console.log(caractere2.estVoyelle()); // false

const caractere3 = new Caractere();
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

class Rectangle {
  private _longueur: number;
  private _largeur: number;

  public setLongueur(longueur: number) {
    this._longueur = longueur;
  }

  public getLongueur() {
    return this._longueur;
  }

  public setLargeur(largeur: number) {
    this._largeur = largeur;
  }

  public getLargeur() {
    return this._largeur;
  }

  constructor(longueur = 1, largeur = 1) {
    this.setLongueur(longueur);
    this.setLargeur(largeur);
  }

  perimetre() {
    return this.calculatePerimeter();
  }

  private calculatePerimeter() {
    return 2 * (this._longueur + this._largeur);
  }

  surface() {
    return this._longueur * this._largeur;
  }

  agrandir(facteur: number) {
    this._longueur *= facteur;
    this._largeur *= facteur;
  }
}

console.log("TD Rectangle");

// Exemple d'utilisation de la classe Rectangle
const rectangle1 = new Rectangle(2, 3);
console.log(rectangle1.perimetre()); // 10
console.log(rectangle1.surface()); // 6

const rectangle2 = new Rectangle();
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

class Reservoir {
  private _capacite: number;
  private _quantite: number;

  public setCapacite(capacite: number) {
    this._capacite = capacite;
  }

  public getCapacite() {
    return this._capacite;
  }

  public setQuantite(quantite: number) {
    this._quantite = quantite;
  }
  public getQuantite() {
    return this._quantite;
  }

  constructor(capacite: number) {
    this._capacite = capacite;
    this._quantite = 0;
  }

  verse(quantite: number): number {
    const espaceRestant = this._capacite - this._quantite;
    if (quantite <= espaceRestant) {
      this._quantite += quantite;
      return 0;
    } else {
      this._quantite = this._capacite;
      return quantite - espaceRestant;
    }
  }

  puise(quantite: number): number {
    if (quantite <= this._quantite) {
      this._quantite -= quantite;
      return quantite;
    } else {
      const toutCeQuiReste = this._quantite;
      this._quantite = 0;
      return toutCeQuiReste;
    }
  }

  jauge(): number {
    return this._quantite;
  }
}

console.log("TD Réservoir");

// Exemple d'utilisation de la classe Réservoir
const reservoir1 = new Reservoir(100);


console.log(reservoir1.jauge()); // 0

console.log(reservoir1.verse(50)); // 0
console.log(reservoir1.jauge()); // 50

console.log(reservoir1.verse(60)); // 10
console.log(reservoir1.jauge()); // 100

console.log(reservoir1.puise(30)); // 30
console.log(reservoir1.jauge()); // 70

console.log(reservoir1.puise(80)); // 70
console.log(reservoir1.jauge()); // 0
