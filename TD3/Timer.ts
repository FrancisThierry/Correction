class Timer {
  private periode: number;
  private etat: number;

  constructor(periode: number) {
    this.periode = periode;
    this.etat = 0;
  }

  public getPeriode(): number {
    return this.periode;
  }

  public setPeriode(periode: number): void {
    this.periode = periode;
  }

  public getEtat(): number {
    return this.etat;
  }

  public setEtat(etat: number): void {
    this.etat = etat;
  }

  public activer(): void {}

  public utiliser(): void {}

  public toString(): string {
    return "Timer{" + "periode=" + this.periode + ", etat=" + this.etat + "}";
  }
}
