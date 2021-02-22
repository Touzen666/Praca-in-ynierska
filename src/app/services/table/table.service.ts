import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Produkt } from 'src/app/models/produkt';
import { LodowkaService } from '../lodowka/lodowka.service';
import { MatTableDataSource } from '@angular/material/table';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  public subscription: Subscription;
  public dataSource;
  public products: Produkt[] = [];
  public user;
  public range = new BehaviorSubject<Date | null>(null);
  constructor(private lodowkaService: LodowkaService,) { }

  setTime(user, timeGroup) {
    // this.user.next(user)
    // console.log(this.user);
    this.range = timeGroup;

    // console.log(this.range.start);
    this.range.next(timeGroup)
    console.log(this.range);
    // console.log(this.range);
  }


  refreshSubscription() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe()
    // }

    // const end = this.range.value.end
    // if (!end) return;
    // end.setHours(23)
    // end.setMinutes(59)

    // this.subscription = this.lodowkaService
    //   .pobierzProduktyWLodowce(this.user.uid, true, {
    //     eatenDateFrom: this.range.value.start,
    //     eatenDateTo: end
    //   })
    //   .subscribe((produkty) => {
    //     this.products = produkty;
    //     console.log('pobrano produkty', produkty);
    //     this.dataSource = new MatTableDataSource<Produkt>(this.products);
    //   });
  }
}
