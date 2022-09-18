import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  title = 'eleicaojs';

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
    var dropdowns = document.querySelectorAll('.dropdown-trigger')
    for (var i = 0; i < dropdowns.length; i++){
        M.Dropdown.init(dropdowns[i]);
    }

  }
}
