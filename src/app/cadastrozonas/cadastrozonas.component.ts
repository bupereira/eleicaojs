import { ZonasStorageService } from './zonas-storage.service';
import { Component, OnInit, } from '@angular/core';
import { Zona } from '../model/zona';
import { Shared } from '../utils/shared';

@Component({
  selector: 'app-cadastrozonas',
  templateUrl: './cadastrozonas.component.html',
  styleUrls: ['./cadastrozonas.component.css'],
  providers: [ZonasStorageService]
})
export class CadastrozonasComponent implements OnInit {
  //zonas?: Zona[];
  get zonas(): Zona[] {
    return this.zonaService.getZonas();
  };
  zona!: Zona;
  showMessage: boolean = false;
  success!: boolean;
  message!: string;

  constructor(private zonaService: ZonasStorageService) {
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.zona = new Zona("", "");
    //this.zonas = this.zonaService.getZonas();
  }

  onSubmit() {
    if (!this.zonaService.exists(this.zona.codZona)) {
      this.zonaService.save(this.zona);
    } else {
      this.zonaService.update(this.zona);
    }
    alert("Zona Eleitoral Adicionada.")
  }

  onEdit(zona: Zona) {
    let clone = Zona.clone(zona);
    this.zona = clone;
  }

  onDelete(codZona: string) {
    let confirm = window.confirm(
      'Tem certeza de que deseja excluir a zona ' + codZona
    );
    if (!confirm) {
      return;
    }
    let response: boolean = this.zonaService.delete(codZona);
    this.showMessage = true;
    this.success = response;
    if (response) {
      this.message = 'Zona excluida com sucesso!';
    } else {
      this.message = 'Falha ao excluir a zona eleitoral.';
    }
    //this.zonas = this.zonaService.getZonas();

  }

}
