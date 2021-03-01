import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Produkt } from 'src/app/models/produkt';
import { LodowkaService } from '../lodowka/lodowka.service';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFireAuth } from '@angular/fire/auth';

export interface ColumnFilters {
  quantity: boolean;
  weight: boolean;
  calories: boolean;
  carbohydrates: boolean;
  proteines: boolean;
  fat: boolean;
}

interface DateRage {
  start: Date;
  end: Date;
}
@Injectable({
  providedIn: 'root'
})

export class TableService {
  public subscription: Subscription;

  public range: BehaviorSubject<DateRage>;
  public products = new BehaviorSubject<Produkt[]>([]);
  public columnFilters = new BehaviorSubject<ColumnFilters>({
    quantity: true,
    weight: true,
    calories: true,
    carbohydrates: true,
    proteines: true,
    fat: true,
  });

  constructor(
    private lodowkaService: LodowkaService,
    private auth: AngularFireAuth
  ) {
    var date = new Date();
    const fromDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const toDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    this.range = new BehaviorSubject<DateRage>({ start: fromDate, end: toDate });
  }

  setTime(timeGroup: DateRage) {
    console.log("setTime", timeGroup);
    this.range.next(timeGroup)
  }

  setFilters(filters: ColumnFilters) {
    this.columnFilters.next(filters)
  }

  refreshSubscription() {
    this.auth.authState.subscribe((user) => {
      if (this.subscription) {
        this.subscription.unsubscribe()
      }

      const end = this.range.value.end
      if (!end) return;
      end.setHours(23)
      end.setMinutes(59)

      this.subscription = this.lodowkaService
        .pobierzProduktyWLodowce(user.uid, true, {
          eatenDateFrom: this.range.value.start,
          eatenDateTo: end
        })
        .subscribe((produkty) => {
          this.products.next(produkty);
          console.log('pobrano produkty', produkty);
        });
    })
  }

}
