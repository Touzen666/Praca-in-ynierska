import { AddProductComponent } from './../add-product/add-product.component';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-modal-creator',
  templateUrl: './modal-creator.component.html',
  styleUrls: ['./modal-creator.component.css'],
})
export class ModalCreatorComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialogAddProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
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
  openDialogDetailsProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
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
