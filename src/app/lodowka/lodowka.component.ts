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
  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.breakpoint = 2
    }
    else if (event.target.innerWidth <= 600) {
      this.breakpoint = 3
    }
    else if (event.target.innerWidth <= 800) {
      this.breakpoint = 4
    }
    else if (event.target.innerWidth <= 1100) {
      this.breakpoint = 5
    }
    else if (event.target.innerWidth >= 1101) {
      this.breakpoint = 8
    }
  }
  ngOnInit(): void {
    if (window.innerWidth <= 440) {
      this.breakpoint = 2
    }
    else if (window.innerWidth <= 600) {
      this.breakpoint = 3
    }
    else if (window.innerWidth <= 800) {
      this.breakpoint = 4
    }
    else if (window.innerWidth <= 1100) {
      this.breakpoint = 5
    }
    else if (window.innerWidth >= 1101) {
      this.breakpoint = 8
    }
    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.lodowkaService
        .pobierzProduktyWLodowce(this.user.uid, false)
        .subscribe((produkty) => {
          this.products = produkty;
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
