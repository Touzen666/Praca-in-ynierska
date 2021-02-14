import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProcessService } from 'ngx-auth-firebaseui';
import { Produkt } from '../models/produkt';
import { LodowkaService } from '../services/lodowka/lodowka.service';
import firebase from 'firebase';

@Component({
  selector: 'app-lodowka',
  templateUrl: './lodowka.component.html',
  styleUrls: ['./lodowka.component.css'],
})
export class LodowkaComponent implements OnInit {
  constructor(
    private lodowkaService: LodowkaService,
    private auth: AngularFireAuth
  ) { }

  public products: Produkt[] = [];
  public user: firebase.User | null;
  public breakpoint;
  // TODO funcja dodajaca produkt do produkty[] TO
  // handleDodanoProdukt()
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 6;
  }
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 6;
    console.log(window.innerWidth);

    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.lodowkaService
        .pobierzProduktyWLodowce(this.user.uid)
        .subscribe((produkty) => {
          this.products = produkty;
          console.log('pobrano produkty', produkty);
          // this.lodowkaService.dodajDoLodowki(this.user.uid, {
          //   nazwa: "jablko",
          //   ilosc: 1,
          //   jednostkaWagi: "kg",
          //   waga: 1,
          // }).then(() => console.log("dodano do lodowki"))
          // this.lodowkaService
          //   .wyjmijZLodowki(this.user.uid, "poA7xnLFLFsuQooDUnVj")
          //   .then(() => console.log("wyjeto z lodowki"))
        });
    });
  }
}
