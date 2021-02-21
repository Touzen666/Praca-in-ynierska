import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Produkt } from '../models/produkt';

import { LodowkaService } from '../services/lodowka/lodowka.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import firebase from 'firebase';

import { FormControl, FormGroup } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'quantity', 'weight', 'energy', 'carbohydrates', 'proteines', 'fat'];
  public dataSource;
  public sortedData;
  public products: Produkt[] = [];
  public user: firebase.User | null;

  public range: FormGroup;
  public subscription: Subscription;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

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
    this.sortedData = this.products.slice();
  }



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
        this.dataSource = new MatTableDataSource<Produkt>(this.products);
      });
  }

  sortData(sort: Sort) {
    const data = this.products.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'quantity': return compare(a.quantity, b.quantity, isAsc);
        case 'weight': return compare(a.weight, b.weight, isAsc);
        case 'energy': return compare(a.energy, b.energy, isAsc);
        case 'carbohydrates': return compare(a.carbohydrates, b.carbohydrates, isAsc);
        case 'proteines': return compare(a.proteines, b.proteines, isAsc);
        case 'fat': return compare(a.fat, b.fat, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



