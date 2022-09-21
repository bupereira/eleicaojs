import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() autor: string;
  year: number;
  footerProportion: number;
  coords: any;
  currentDate: Date;
  constructor() {
    this.autor = "Murilo Pereira";
    this.year = new Date().getFullYear();
    this.footerProportion = 50;
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords = position.coords;
    });
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

}
