import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LodowkaComponent } from './lodowka/lodowka.component';
import { UserComponent } from './user/user.component'
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "lodowka",
    component: LodowkaComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['user']) }
  },
  {
    path: "tabelaKalorii",
    component: TabelaComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['user']) }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
