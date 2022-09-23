import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Zona } from "../model/zona";
import { Constants } from "../utils/constants";
import { WebStorageUtil } from "../utils/web-storage-util";

@Injectable({
  providedIn: 'root',
})
export class ZonasStorageService {
  private zonasSource!: BehaviorSubject<number>;
  zonas!: Zona[];

  constructor() {
    this.zonas = WebStorageUtil.get(Constants.ZONAS_KEY);
    this.zonasSource = new BehaviorSubject<number>(this.zonas.length);
  }

  save(zona: Zona) {
    this.zonas = WebStorageUtil.get(Constants.ZONAS_KEY);
    this.zonas.push(zona);
    WebStorageUtil.set(Constants.ZONAS_KEY, this.zonas);
  }

  update(zona: Zona) {
    WebStorageUtil.get(Constants.ZONAS_KEY);
    this.delete(zona.codZona);
    this.save(zona);
  }

  delete(codZona: string): boolean {
    this.zonas = this.zonas.filter(z => {
      return z.codZona?.valueOf() != codZona.valueOf();
    });

    WebStorageUtil.set(Constants.ZONAS_KEY, this.zonas);
    return true;
  }

  exists(value: string): boolean {
    this.zonas = WebStorageUtil.get(Constants.ZONAS_KEY);
    for (let z of this.zonas) {
      if (z.codZona.valueOf() == value.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getZonas(): Zona[] {
    this.zonas = WebStorageUtil.get(Constants.ZONAS_KEY);
    return this.zonas;
  }

  notifyTotalUsers() {
    this.zonasSource.next(this.getZonas()?.length);

  }

  asObservable(): Observable<number> {
    return this.zonasSource;

  }

}
