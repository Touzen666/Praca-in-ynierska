import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Produkt } from '../models/produkt';
import { LodowkaService } from '../services/lodowka/lodowka.service';
import firebase from 'firebase';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  constructor(
    private lodowkaService: LodowkaService,
    private auth: AngularFireAuth
  ) { }

  public products: Produkt[] = [];
  public user: firebase.User | null;

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.lodowkaService
        .pobierzProduktyWLodowce(this.user.uid, false)
        .subscribe((produkty) => {
          this.products = produkty;
          console.log('pobrano produkty', produkty);

        });
    });
  }


}
