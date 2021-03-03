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
    const collection = eaten ? "produkty_zjedzone" : "produkty";

    return this.firestore
      .collection('users')
      .doc(user)
      .collection(collection, ref => ref
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
        eatenDate: 1
      });
  }

  async zjedzProdukt(user: string, idProduktu: string, wagaDoZjedznia: number): Promise<void> {
    const doc = this.firestore
      .collection('users')
      .doc(user)
      .collection('produkty')
      .doc(idProduktu);

    const produkt = await doc.get().toPromise();

    const obecnyProdukt = produkt.data() as Produkt;
    const obecnaWaga = obecnyProdukt.weight;
    const docelowaWaga = obecnaWaga - wagaDoZjedznia

    if (docelowaWaga < 0) {
      throw new Error("Chcesz zjeść wiecej niż masz w lodówce")
    } else if (docelowaWaga === 0) {
      await doc.delete()
    } else {
      await doc.update({
        weight: obecnaWaga - wagaDoZjedznia,
      });
    }

    return this.firestore
      .collection('users')
      .doc(user)
      .collection('produkty_zjedzone')
      .doc()
      .set({
        ...obecnyProdukt,
        weight: wagaDoZjedznia,
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
