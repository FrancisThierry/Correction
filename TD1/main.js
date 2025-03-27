// Exercice 1
// . Ecrire la définition d'une classe Cercle avec deux attributs centre et rayon où centre est un
// objet de type Point et rayon un nombre.
// . Instancier un objet de type Cercle qui représente un cercle dont le centre est en (150, 100) et le
// rayon 75.
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Cercle = /** @class */ (function () {
    function Cercle(centre, rayon) {
        this.centre = centre;
        this.rayon = rayon;
    }
    return Cercle;
}());
var centre = new Point(150, 100);
var cercle = new Cercle(centre, 75);
console.log("Exercice 1");
console.log(cercle);
// Exercice 2
// Ecrire une fonction pointDansCercle(cercle: Cercle, point: Point): boolean qui retourne
// vrai si et seulement si le point est dans le cercle.
// Indication : un point est dans la surface définie par le cercle si et seulement si la distance entre le centre du
// cercle et le point est inférieure au rayon du cercle.
/**
 * Vérifie si un point donné se trouve à l'intérieur d'un cercle.
 * Selon pythagore, la distance entre le centre du cercle et le point est égale à la racine carrée de la somme des carrés des différences des coordonnées x et y.
 * @param {Cercle} cercle - Le cercle avec un centre et un rayon.
 * @param {Point} point - Le point à vérifier.
 * @returns {boolean} - Retourne `true` si le point est à l'intérieur du cercle, sinon `false`.
 */
function isPointDansCercle(cercle, point) {
    var distance = Math.sqrt(Math.pow(point.x - cercle.centre.x, 2) + Math.pow(point.y - cercle.centre.y, 2));
    return distance < cercle.rayon;
}
console.log("Exercice 2");
var point1 = new Point(160, 110);
console.log(isPointDansCercle(cercle, point1) ? "Le point est dans le cercle" : "le point n'est pas dans le cercle"); // true or false based on the point's position
// Exercice 3
// Ecrire une fonction rectangleDansCercle(cercle: Cercle, rectangle: Rectangle): boolean
// qui retourne vrai si et seulement si le rectangle est complètement à l'intérieur du cercle.
// Indication : un rectangle est complètement à l'intérieur du cercle si et seulement si chacun de ses coins est
// dans le cercle
var Rectangle = /** @class */ (function () {
    function Rectangle(topLeft, width, height) {
        this.topLeft = topLeft;
        this.width = width;
        this.height = height;
    }
    return Rectangle;
}());
function isRectangleDansCercle(cercle, rectangle) {
    var points = [
        rectangle.topLeft,
        new Point(rectangle.topLeft.x + rectangle.width, rectangle.topLeft.y),
        new Point(rectangle.topLeft.x, rectangle.topLeft.y + rectangle.height),
        new Point(rectangle.topLeft.x + rectangle.width, rectangle.topLeft.y + rectangle.height)
    ];
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var point = points_1[_i];
        if (!isPointDansCercle(cercle, point)) {
            return false;
        }
    }
    return true;
}
console.log("Exercice 3");
var rectangle = new Rectangle(new Point(140, 90), 20, 20);
console.log(isRectangleDansCercle(cercle, rectangle) ? "Le rectangle est dans le cercle" : "Le rectangle n'est pas dans le cercle"); // true or false based on the rectangle's position
// Exercice 4
// Ecrire une fonction chevauchement(cercle: Cercle, rectangle: Rectangle): boolean qui
// retourne vrai si et seulement si au moins un des coins du rectangle se trouve dans le cercle.
function chevauchement(cercle, rectangle) {
    var points = [
        rectangle.topLeft,
        new Point(rectangle.topLeft.x + rectangle.width, rectangle.topLeft.y),
        new Point(rectangle.topLeft.x, rectangle.topLeft.y + rectangle.height),
        new Point(rectangle.topLeft.x + rectangle.width, rectangle.topLeft.y + rectangle.height)
    ];
    for (var _i = 0, points_2 = points; _i < points_2.length; _i++) {
        var point = points_2[_i];
        if (isPointDansCercle(cercle, point)) {
            return true;
        }
    }
    return false;
}
console.log("Exercice 4");
var rectangle2 = new Rectangle(new Point(140, 90), 20, 20);
console.log(chevauchement(cercle, rectangle2) ? "Le rectangle chevauche le cercle" : "Le rectangle ne chevauche pas le cercle"); // true or false based on the rectangle's position
// Exercice 5
var Temps = /** @class */ (function () {
    function Temps() {
    }
    return Temps;
}());
// Question 1
// Ecrire une fonction temps2Number qui prend un objet de type Temps et retourne le nombre total de
// secondes.
function temps2Number(temps) {
    return temps.heure * 3600 + temps.minute * 60 + temps.second;
}
// Question 2
// Ecrire une fonction number2Temps qui prend un nombre positif en paramètre (qui représente un nombre
// de secondes) et qui retournent un objet de type Temps représentant ce nombre de secondes décomposé
// en heures, en minutes et en secondes.
function number2Temps(seconds) {
    var heure = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minute = Math.floor(seconds / 60);
    var second = seconds % 60;
    return { heure: heure, minute: minute, second: second };
}
// Question 3
// Ecrivez une fonction multiplieTemps qui prend un objet de type Temps et un nombre (supposé positif) et
// qui retourne un nouvel objet de type Temps contenant le produit du temps passé en paramètre par le
// nombre.
function multiplieTemps(temps, facteur) {
    var totalSeconds = temps2Number(temps) * facteur;
    return number2Temps(totalSeconds);
}
console.log("Exercice 5 - Question 3");
var temps = { heure: 1, minute: 30, second: 45 };
var facteur = 2;
console.log(multiplieTemps(temps, facteur)); // { heure: 3, minute: 1, second: 30 }
// 1. La fonction ci-dessous marche-t'elle et si non pourquoi ?
// function multiplie(t: Temps, nb: number): void {
//  let temps = multiplieTemps(t, nb);
//  t = temps;
// }
// Non, la fonction multiplie ne fonctionne pas comme prévu. Voici pourquoi :
// Passage par valeur : En TypeScript (et JavaScript), les objets sont passés par référence, mais les variables elles-mêmes sont passées par valeur. Cela signifie que lorsque vous affectez une nouvelle valeur à t à l'intérieur de la fonction, cela ne modifie pas l'objet original passé en argument.
// Affectation locale : La ligne t = temps; ne modifie que la variable locale t à l'intérieur de la fonction multiplie. L'objet original passé en argument reste inchangé.
function multiplie(t, nb) {
    var totalSeconds = temps2Number(t) * nb;
    var newTemps = number2Temps(totalSeconds);
    t.heure = newTemps.heure;
    t.minute = newTemps.minute;
    t.second = newTemps.second;
}
console.log("Exercice 5 - Question 4");
var temps2 = { heure: 1, minute: 30, second: 45 };
multiplie(temps2, 2);
console.log(temps2); // { heure: 3, minute: 1, second: 30 }
// Question 6
// Ecrire une fonction qui prend en paramètres un objet de type Temps qui représente le temps pour finir une
// course et un nombre qui représente la distance en kilomètre de la course et qui retourne la vitesse moyenne
// (temps par kilomètre).
function vitesseMoyenne(temps, distance) {
    var totalSeconds = temps2Number(temps);
    return totalSeconds / distance;
}
console.log("Exercice 5 - Question 6");
var tempsCourse = { heure: 1, minute: 30, second: 0 };
var distanceCourse = 10; // 10 km
console.log(vitesseMoyenne(tempsCourse, distanceCourse)); // 540 seconds per km (1 hour 30 minutes for 10 km)
