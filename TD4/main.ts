// Donnez le code d'un programme principal qui :
// . crée deux pistes p1 et p2, respectivement de titre "t1" et "t2" et de durée 230 et 180 secondes.
// . initialise une référence d sur un objet Album de titre "td" composé de 2 pistes.
// . ajoute à l'album, dans l'ordre, les pistes p1 et p2 puis affiche la durée totale de l'album

import { Piste } from './Piste.ts';
import { Album } from './Album.ts';

// let piste = new Piste();
let piste1 = new Piste("t1", 230);

let piste2 = new Piste("t2", 180);

console.log(piste1.toString()); // titre: t1 duree: 230
let d = new Album("td", 2);
d.ajouterPiste(piste1);
d.ajouterPiste(piste2);
console.log(d.dureeTotale()); // 410
