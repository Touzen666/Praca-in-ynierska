import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/storage';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produkt } from './../models/produkt';

@Injectable({
  providedIn: 'root',
})
export class LodowkaService {
  constructor(private firestore: AngularFirestore) { }

  pobierzProduktyWLodowce(user: string): Observable<Produkt[]> {
    return this.firestore
      .collection("users")
      .doc(user)
      .collection("produkty")
      .get()
      .pipe(map(produkty => {
        return produkty.docs
          .map(produkt => ({ ...produkt.data(), id: produkt.id }) as Produkt)
      }))
  }

  dodajDoLodowki(user: string, produkt: Produkt): Promise<void> {
    return this.firestore
      .collection("users")
      .doc(user)
      .collection("produkty")
      .doc()
      .set(produkt)
  }

  wyjmijZLodowki(user: string, idProduktu: string): Promise<void> {
    return this.firestore
      .collection("users")
      .doc(user)
      .collection("produkty")
      .doc(idProduktu)
      .delete()
  }
}
