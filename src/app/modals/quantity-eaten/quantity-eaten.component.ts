import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produkt } from 'src/app/models/produkt';
import { LodowkaService } from 'src/app/services/lodowka/lodowka.service';
import { ProductDetaleComponent } from '../product-detale/product-detale.component';
export interface eatenProduct {
  quantity: number,
  weight: number,
}
@Component({
  selector: 'app-quantity-eaten',
  templateUrl: './quantity-eaten.component.html',
  styleUrls: ['./quantity-eaten.component.css']
})
export class QuantityEatenComponent implements OnInit {
  product: eatenProduct;
  constructor(
    public lodowka: LodowkaService,
    public fb: FormBuilder,
    private auth: AngularFireAuth,
    public dialogRef: MatDialogRef<ProductDetaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Produkt }
  ) { }

  ngOnInit(): void {
  }

  eatProductForm = this.fb.group({
    quantity: [0, Validators.required],
  })
  get quantity() { return this.eatProductForm.get('quantity') }

  submited() {
    // console.log(this.addProductForm.valid);
    this.product = this.eatProductForm.value

    if (this.eatProductForm.valid && this.eatProductForm.dirty) {
      this.dialogRef.close(this.product);
      this.auth.authState.subscribe((user) => {
        this.lodowka.zjedzProdukt(user.uid, this.data.product.id, this.eatProductForm.value.quantity);
      });
    } else {
      alert('Popraw formularz')
    }
  }

  formatLabel(unit) {
    return (value: number) => {
      if (unit) return value + "" + unit
      return value;
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
