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
    name: ['', Validators.compose([Validators.required, Validators.pattern('[a-z," ",A-ĄąĆćĘęŁłŃńÓóŚśŹźŻż]*')])],
    units: ['', Validators.required],
    weight: ['', Validators.compose([Validators.required, Validators.pattern('[1-9]|10')])],
    calories: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
    carbohydrates: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
    proteines: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
    fat: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
  })

  get name() { return this.addProductForm.get('name') }
  get units() { return this.addProductForm.get('units') }
  get weight() { return this.addProductForm.get('weight') }
  get calories() { return this.addProductForm.get('calories') }
  get carbohydrates() { return this.addProductForm.get('carbohydrates') }
  get proteines() { return this.addProductForm.get('proteines') }
  get fat() { return this.addProductForm.get('fat') }
  checkboxClicked() {
    this.hasNotClicked = false
  }

  submited() {
    // console.log(this.addProductForm.valid);
    this.product = this.addProductForm.value

    if (this.addProductForm.invalid) {
      Object.keys(this.addProductForm.controls).forEach(field => {
        const control = this.addProductForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    };
    // console.log(this.addProductForm.value);
    this.dialogRef.close(this.product);
  }
  ngOnInit() {

  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
