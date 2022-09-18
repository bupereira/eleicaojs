import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author: string;
  year: number;
  footerProportion: number;
  constructor() {
    this.author = "Murilo Pereira";
    this.year = new Date().getFullYear();
    this.footerProportion = 50;
  }

  ngOnInit(): void {
  }

}
