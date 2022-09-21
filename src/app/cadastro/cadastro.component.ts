import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  tipo: string;
  zonas: boolean;
  eleitores: boolean;
  constructor(private route: ActivatedRoute) {
    this.tipo = this.route.snapshot.params['tipo'];
    this.zonas = this.tipo === "zonas";
    this.eleitores = this.tipo === "eleitores";
  }

  ngOnInit(): void {

  }

}
