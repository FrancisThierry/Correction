import { Piste } from "./Piste.ts";

// La classe Album permet de représenter les albums de musique. Un album de musique est défini par son
// titre, représenté par une chaîne de caractères et les pistes audio qui le composent. Le titre et le nombre de
// pistes composant un album sont fournis à la création de cet album. On utilise un tableau pour mémoriser
// les pistes d'un album.
// Les pistes sont ajoutées une à une à l'album. Un attribut est utilisé pour compter les pistes ajoutées à
// l'album. Lorsque toutes les pistes ont été ajoutées, l'album est dit terminé (et il ne l'est pas dans le cas
// contraire).

class Album {
  private _titre: string;
  private _pistes: Piste[];
  private _nbPistes: number;
  private _nbPistesAjoutees: number;

    constructor(titre: string, nbPistes: number) {
        this._titre = titre;
        this._pistes = [];
        this._nbPistes = nbPistes;
        this._nbPistesAjoutees = 0;
    }

//   Donnez le code de la méthode estFini() de la classe Album dont le résultat est true si et seulement si
// l'album est terminé.

    public estFini(): boolean {
        return this._nbPistes == this._nbPistesAjoutees;
    }


//     Question 6
// La méthode contient de la classe Album prend en paramètre un objet Piste. Son résultat est true si et
// seulement si l'album contient la piste passée en paramètre. Donnez le code de cette méthode.

    public contient(p: Piste): boolean {
        for (let piste of this._pistes) {
            if (piste.egale(p)) {
                return true;
            }
        }
        return false;
    }


    // La méthode ajouterPiste de la classe Album permet d'ajouter une piste à un album. Les pistes sont
    // toujours ajoutées les unes après les autres en commençant par la première (c'est-à-dire : "le tableau est
    // rempli dans l'ordre").
    // On supposera sans jamais le vérifier par le code que l'on n'ajoute jamais deux pistes égales dans un même
    // album.
    // Si l'album est déjà terminé, la méthode ajouterPiste ne fait rien.

    public ajouterPiste(p: Piste): void {
        if (!this.estFini()) {
            this._pistes.push(p);
            this._nbPistesAjoutees++;
        }
    }

//     Définissez une méthode duréeTotale qui retourne la durée totale d'un album terminé. Cette méthode
// retourne 0 si l'album n'est pas terminé

    public dureeTotale(): number {
        if (this.estFini()) {
            let total = 0;
            for (let piste of this._pistes) {
                total += piste.getDuree();
            }
            return total;
        }
        return 0;
    }


//     On dit que deux albums sont égaux s'ils contiennent les mêmes pistes, mais celle-ci peuvent être dans des
// ordres différents dans les deux albums.
// Donnez le code d'une méthode égale de la classe Album conforme à cette spécification

    public egale(a: Album): boolean {
        if (this._nbPistes != a._nbPistes) {
            return false;
        }
        for (let piste of this._pistes) {
            if (!a.contient(piste)) {
                return false;
            }
        }
        return true;
    }




}

export { Album };
