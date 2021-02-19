import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/storage';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produkt } from '../../models/produkt';

@Injectable({
  providedIn: 'root',
})
export class LodowkaService {
  constructor(private firestore: AngularFirestore) { }

  // zjedzoneProdukty(user: string, idProduktu: string): Promise<void> {

  // }

  pobierzProduktyWLodowce(user: string): Observable<Produkt[]> {
    return this.firestore
      .collection('users')
      .doc(user)
      .collection('produkty', ref => ref.where("eaten", "==", false))
      .valueChanges({ idField: "id" })
      .pipe(
        map((produkty) => {
          return produkty.map(
            (produkt) => (produkt as Produkt)
          );
        })
      );
  }

  dodajDoLodowki(user: string, produkt: Produkt): Promise<void> {
    return this.firestore
      .collection('users')
      .doc(user)
      .collection('produkty')
      .doc()
      .set({
        ...produkt,
        eaten: false
      });
  }

  zjedzProdukt(user: string, idProduktu: string): Promise<void> {
    return this.firestore
      .collection('users')
      .doc(user)
      .collection('produkty')
      .doc(idProduktu)
      .update({
        eaten: true
      });
  }
}
