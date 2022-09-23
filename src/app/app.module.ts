import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastrozonasComponent } from './cadastrozonas/cadastrozonas.component';
import { CadastroeleitoresComponent } from './cadastroeleitores/cadastroeleitores.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    FooterComponent,
    LandingPageComponent,
    CadastroComponent,
    CadastrozonasComponent,
    CadastroeleitoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
