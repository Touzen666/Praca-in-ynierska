import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
interface titles {
  path: string;
  title: string;
}

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})

export class TitlesComponent implements OnInit {
  title = "title"

  public titles = [
    { path: 'Moja dieta', title: 'Moja dieta' },
    { path: 'lodowka', title: 'Lodówka' },
    { path: 'tabelaKalorii', title: 'Tabela Kalorii' },
    { path: 'user', title: 'Profil' }
  ]
  public href: string = "";

  constructor() { }

  ngOnInit() {

  }

}
