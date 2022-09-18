import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author: string;
  year: number;
  constructor() {
    this.author = "Murilo Pereira";
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

  getLogoDetails() {
    return "../../assets/resources/images/brasao.jpg";
  }
}
