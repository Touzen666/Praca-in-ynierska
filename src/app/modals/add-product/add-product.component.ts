import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Produkt } from 'src/app/models/produkt';
import { FormBuilder, Validators } from '@angular/forms';
// import { ProductDetaleComponent } from '../product-detale/product-detale.component';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  // providers: [ProductDetaleComponent]
})
export class AddProductComponent implements OnInit {
  public title = 'Dodawanie Produktu';

  public product: Produkt;
  public hasNotClicked: boolean;


  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    public fb: FormBuilder
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  addProductForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.pattern('[A-ĄąĆćĘęŁłŃńÓóŚśŹźŻż]*')])],
    quantity: [''],
    units: ['', Validators.required],
    weight: ['', Validators.compose([Validators.required, Validators.pattern('[1-9]|10')])],
    calories: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
    carbohydrates: ['', Validators.pattern('[1-9]|10')],
    proteines: ['', Validators.pattern('[1-9]|10')],
    fat: ['', Validators.pattern('[1-9]|10')],
  })

  get name() { return this.addProductForm.get('name') }
  get units() { return this.addProductForm.get('units') }
  get weight() { return this.addProductForm.get('weight') }
  get calories() { return this.addProductForm.get('calories') }
  checkboxClicked() {
    this.hasNotClicked = false
  }

  submited() {
    console.log(this.addProductForm.valid);
    this.product = this.addProductForm.value

    if (this.addProductForm.valid && this.addProductForm.dirty) {
      console.log(this.addProductForm.value);
      this.dialogRef.close(this.product);
    } else {
      alert('Popraw formularz')
    }
  }

  ngOnInit() {

  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
