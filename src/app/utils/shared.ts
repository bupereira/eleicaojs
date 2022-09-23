import { Zona } from '../model/zona';
import { Constants } from './constants';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.ZONA_ZERO) != null) {
      return;
    }

    //usuário definido na forma literal
    let zona = new Zona(Constants.ZONA_ZERO, 'Matriz Brasília');

    localStorage.setItem(Constants.ZONA_ZERO, JSON.stringify(zona));
    localStorage.setItem(Constants.ZONAS_KEY, JSON.stringify([]));
  }
}
