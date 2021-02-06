import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-product-detale',
  templateUrl: './product-detale.component.html',
  styleUrls: ['./product-detale.component.css'],
})
export class ProductDetaleComponent implements OnInit {
  public title = 'Produkt';
  constructor(
    public dialogRef: MatDialogRef<ProductDetaleComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
