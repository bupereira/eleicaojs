import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'cadastro/:tipo', component: CadastroComponent},
  {path: 'cadastrozonas', component: CadastroComponent},
  {path: 'cadastrocandidatos', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
