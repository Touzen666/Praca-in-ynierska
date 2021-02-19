import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Produkt } from '../models/produkt';
import { LodowkaService } from '../services/lodowka/lodowka.service';
import firebase from 'firebase';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  constructor(
    private lodowkaService: LodowkaService,
    private auth: AngularFireAuth
  ) {
    var date = new Date();
    const fromDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const toDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    this.range = new FormGroup({
      start: new FormControl(fromDate),
      end: new FormControl(toDate)
    });
  }

  public products: Produkt[] = [];
  public user: firebase.User | null;

  public range: FormGroup;
  public subscription: Subscription;

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.refreshSubscription()
    });
  }

  refreshSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }

    const end = this.range.value.end
    if (!end) return;
    end.setHours(23)
    end.setMinutes(59)

    this.subscription = this.lodowkaService
      .pobierzProduktyWLodowce(this.user.uid, true, {
        eatenDateFrom: this.range.value.start,
        eatenDateTo: end
      })
      .subscribe((produkty) => {
        this.products = produkty;
        console.log('pobrano produkty', produkty);
      });
  }



}
