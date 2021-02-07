import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Produkt } from 'src/app/models/produkt';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public title = 'Dodawanie Produktu';
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  public produkt: Produkt;

  ngOnInit() {}
  name = new FormControl('', [Validators.required, Validators.minLength(2)]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Prosze wprowadzić nazwe';
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
