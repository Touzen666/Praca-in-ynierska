import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Produkt } from 'src/app/models/produkt';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public title = 'Dodawanie Produktu';

  public produkt: Produkt;
  public hasNotClicked: boolean;
  @ViewChild('nazwa') poleNazwy;


  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    public fb: FormBuilder
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  addProductForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
    quantity: [''],
    // units: this.fb.group([{
    //   kg: [''],
    //   g: [''],
    //   l: [''],
    //   mil: [''],
    // }, Validators.required]),
    weight: ['', Validators.compose([Validators.required, Validators.pattern('[1-9]|10')])],
    energy: ['', Validators.pattern('[1-9]|10')],
    carbohydrates: ['', Validators.pattern('[1-9]|10')],
    proteines: ['', Validators.pattern('[1-9]|10')],
    fat: ['', Validators.pattern('[1-9]|10')],
  })

  get name() { return this.addProductForm.get('name') }

  checkboxClicked() {
    this.hasNotClicked = false
  }

  submited() {
    console.log(this.addProductForm.valid);
    this.produkt = this.addProductForm.value

    if (this.addProductForm.valid && this.addProductForm.dirty) {
      console.log(this.addProductForm.value);
      this.onNoClick();
      return this.produkt
    } else {
      alert('Popraw formularz')
    }
  }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
