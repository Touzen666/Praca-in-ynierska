import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {
  public href: string = "lodówka";

  constructor(private router: Router) { }
  catchTitle() {
    let url = this.router.url
    if (url == '/lodowka') {
      url = "Lodówka"
    } else if (url == '/user') {
      url = "Profil"
    }
    else if (url == '/tabelaKalorii') {
      url = "Tabela kalorii"
    }
    this.href = url;
    console.log(this.router.url);
  }
}
