import { Observable } from 'rxjs';
import { ProductDetaleComponent } from './../modals/product-detale/product-detale.component';
import { AddProductComponent } from './../modals/add-product/add-product.component';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Produkt } from '../models/produkt';
@Injectable({
  providedIn: 'root',
})
export class ModalCreatorService {
  constructor(public dialog: MatDialog) {}

  openDialogAddProduct(): Observable<Produkt> {
    const dialogRef = this.dialog.open(AddProductComponent, {
      panelClass: ['full-screen-dialog'],
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      // data: { name: this.name, animal: this.animal },
    });

    return dialogRef.afterClosed();
  }
  openDialogDetailsProduct(): void {
    const dialogRef = this.dialog.open(ProductDetaleComponent, {
      panelClass: ['full-screen-dialog'],
      width: '100%',
      height: '100%',
      maxWidth: '100%',

      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  ngOnInit(): void {}
}
