import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/storage';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';
import { maxDate, minDate } from 'src/constants';
import { Produkt } from '../../models/produkt';

@Injectable({
  providedIn: 'root',
})
export class LodowkaService {
  constructor(private firestore: AngularFirestore) { }

  pobierzProduktyWLodowce(
    user: string,
    eaten: boolean,
    options?: {
      eatenDateFrom?: Date,
      eatenDateTo?: Date
    }
  ): Observable<Produkt[]> {
    return this.firestore
      .collection('users')
      .doc(user)
      .collection('produkty', ref => ref
        .where("eaten", "==", eaten)
        .where("eatenDate", ">", options?.eatenDateFrom?.getTime() || minDate)
        .where("eatenDate", "<", options?.eatenDateTo?.getTime() || maxDate)
      )
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
        eaten: false,
        eatenDate: 1
      });
  }

  zjedzProdukt(user: string, idProduktu: string): Promise<void> {
    return this.firestore
      .collection('users')
      .doc(user)
      .collection('produkty')
      .doc(idProduktu)
      .update({
        eaten: true,
        eatenDate: Date.now()
      });
  }
  wyjmijProdukt(user: string, idProduktu: string): Promise<void> {
    return this.firestore
      .collection('users')
      .doc(user)
      .collection('produkty')
      .doc(idProduktu)
      .delete()
  }
}
