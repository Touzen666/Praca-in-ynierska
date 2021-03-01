import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Produkt } from '../models/produkt';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';


import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ColumnFilters, TableService } from '../services/table/table.service';
export interface columnSum {
  caloriesSum: number;
  carbohydratesSum: number;
  proteinesSum: number;
  fatSum: number;
}
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [];
  public sortedData;
  public products = this.tableService.products;
  public range = this.tableService.range;
  public dataSource = new MatTableDataSource<Produkt>([]);
  public user: firebase.User | null;
  public filter: ColumnFilters

  displayedSumColumns: string[] = ['caloriesSum', 'carbohydratesSum', 'proteinesSum', 'fatSum'];
  columnSum = {
    caloriesSum: 0,
    carbohydratesSum: 0,
    proteinesSum: 0,
    fatSum: 0
  }
  sumSource: MatTableDataSource<columnSum>;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  constructor(
    private tableService: TableService,
    private auth: AngularFireAuth
  ) {
    // this.sortedData = this.products.slice();
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.tableService.refreshSubscription();
    });
    this.products.subscribe(products => {
      this.dataSource = new MatTableDataSource<Produkt>(products)
      this.sumColumns(products);
    })
    this.tableService.columnFilters.subscribe(filter => {
      console.log("update filter", filter)
      this.filter = filter
      this.updateColumns()
    })
  }

  updateColumns() {
    const order = ['name', 'quantity', 'weight', 'calories', 'carbohydrates', 'proteines', 'fat'];
    const columns = []

    order.forEach(col => {
      const filterVal = this.filter[col]
      if (filterVal === undefined) columns.push(col)
      if (filterVal === true) columns.push(col)
    })

    this.displayedColumns = columns
  }

  sumColumns(productsList) {
    productsList.forEach(p => {
      this.columnSum.caloriesSum += p.calories
      this.columnSum.carbohydratesSum += p.carbohydrates
      this.columnSum.proteinesSum += p.proteines
      this.columnSum.fatSum += p.fat
    })
    this.sumSource = new MatTableDataSource<columnSum>([this.columnSum]);
  }
  sortData(sort: Sort) {
    //   const data = this.products.slice();
    //   if (!sort.active || sort.direction === '') {
    //     this.sortedData = data;
    //     return;
    //   }

    //     this.sortedData = data.sort((a, b) => {
    //       const isAsc = sort.direction === 'asc';
    //       switch (sort.active) {
    //         case 'name': return compare(a.name, b.name, isAsc);
    //         case 'quantity': return compare(a.quantity, b.quantity, isAsc);
    //         case 'weight': return compare(a.weight, b.weight, isAsc);
    //         case 'energy': return compare(a.energy, b.energy, isAsc);
    //         case 'carbohydrates': return compare(a.carbohydrates, b.carbohydrates, isAsc);
    //         case 'proteines': return compare(a.proteines, b.proteines, isAsc);
    //         case 'fat': return compare(a.fat, b.fat, isAsc);
    //         default: return 0;
    //       }
    //     });
    //   }
  }
  // function compare(a: number | string, b: number | string, isAsc: boolean) {
  //   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  // }

}

