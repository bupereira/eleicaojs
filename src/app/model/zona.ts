export class Zona {
  codZona!: string;
  descZona: string;

  constructor(codZona: string, descZona: string) {
    this.codZona = codZona;
    this.descZona = descZona
  }

  public static clone(zona: Zona) {
    let z: Zona = new Zona(zona.codZona, zona.descZona);
    return z;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param zona
   * @returns
   */
   public static toWS(zona: Zona) {
    let z: Zona = new Zona(zona.codZona, zona.descZona);
    return z;
  }
}
