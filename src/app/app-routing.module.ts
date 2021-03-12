import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LodowkaComponent } from './lodowka/lodowka.component';
import { UserComponent } from './user/user.component'
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  { path: '', redirectTo: 'lodowka', pathMatch: 'full' },
  {
    path: "user",
    component: UserComponent,
    data: {
      pageName: "Konto użytkownika",
    }
  },
  {
    path: "lodowka",
    component: LodowkaComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: () => redirectUnauthorizedTo(['user']),
      pageName: "Lodówka",
    }
  },
  {
    path: "tabelaKalorii",
    component: TabelaComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: () => redirectUnauthorizedTo(['user']),
      pageName: "Tabela kalorii",
    }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
