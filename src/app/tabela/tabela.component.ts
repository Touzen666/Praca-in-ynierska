import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
    fatSum: 0,
    // units: ''
  }
  sumSource: MatTableDataSource<columnSum>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  start: Date;
  productsList: Produkt[];


  constructor(
    private tableService: TableService,
    private auth: AngularFireAuth,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.tableService.refreshSubscription();
    });
    this.products.subscribe(products => {
      this.productsList = products;
      this.changeDetectorRef.detectChanges()
      this.dataSource = new MatTableDataSource<Produkt>(products)
      this.dataSource.sort = this.sort;
      this.sumColumns(products);
    })
    this.range.subscribe(range => {
      this.start = range.start
    })
    this.tableService.columnFilters.subscribe(filter => {
      this.filter = filter
      this.updateColumns()
    })
  }

  updateColumns() {
    const order = ['eatenDate', 'name', 'weight', 'calories', 'carbohydrates', 'proteines', 'fat'];
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
      this.columnSum.caloriesSum += p.calories || 0
      this.columnSum.carbohydratesSum += p.carbohydrates || 0
      this.columnSum.proteinesSum += p.proteines || 0
      this.columnSum.fatSum += p.fat || 0
      // this.columnSum.units = p.units
    })
    this.sumSource = new MatTableDataSource<columnSum>([this.columnSum]);
  }
}
