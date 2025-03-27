class Piste {
  private _titre: string;
  private _duree: number;
  constructor(titre: string = '', duree: number = 0) {
    this._titre = titre;
    this._duree = duree;
  }




  getTitre(): string {
    return this._titre;
  }
  getDuree(): number {
    return this._duree;
  }

  setTitre(titre: string): void {
    this._titre = titre;
  }

  setDuree(duree: number) {
    this._duree = duree;
  }

  //Question 2
  // Ajoutez à cette classe une méthode égale sachant que deux pistes sont égales si elles ont le même titre et
  // la même durée.
  public egale(p: Piste): boolean {
    return this._titre == p._titre && this._duree == p._duree;
  }
  //Ajoutez à cette classe une méthode toString qui retourne une chaîne de caractères contenant le titre et
  // la durée de la piste.
    public toString(): string {
        return `titre: ${this._titre} duree: ${this._duree}`;
    }
}

export { Piste };
