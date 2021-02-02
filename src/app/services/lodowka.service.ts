import { Produkt } from './../models/produkt';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LodowkaService {
  constructor() { }
  // getRef() {
  //   var db = firebase.firestore();

  //   var produktyRef = db
  //     .collection('produkty')
  //     .doc('lodowka')
  //     .collection('details')
  //     .doc('data');

  //   console.log(produktyRef);
  // }


  pobierzProduktyWLodowce(user: string): Observable<Produkt[]> {
    return scheduled([
      [{
        nazwa: "test",
        ilosc: 1,
        jednostkaWagi: 'kg',
        waga: 1
      } as Produkt]
    ], asyncScheduler)
  }

  dodajDoLodowki(user: string, produkt: Produkt): Observable<boolean> {
    return scheduled([true], asyncScheduler)
  }

  wyjmijZLodowki(user: string, idProduktu: string): Observable<boolean> {
    return scheduled([
      true
    ], asyncScheduler)
  }
}
