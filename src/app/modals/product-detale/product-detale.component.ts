import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Produkt } from 'src/app/models/produkt';
import { LodowkaService } from 'src/app/services/lodowka/lodowka.service';
import { ModalCreatorService } from 'src/app/services/modal-creator/modal-creator.service';
import { AddProductComponent } from '../add-product/add-product.component';
@Component({
  selector: 'app-product-detale',
  templateUrl: './product-detale.component.html',
  styleUrls: ['./product-detale.component.css'],
})
export class ProductDetaleComponent implements OnInit {
  public title = 'Produkt';
  constructor(
    public lodowka: LodowkaService,
    private auth: AngularFireAuth,
    public modalCreator: ModalCreatorService,
    public dialogRef: MatDialogRef<ProductDetaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Produkt }
  ) { }
  @Input() product: Produkt;

  public openModal = this.modalCreator;
  ngOnInit() { }

  eatProduct() {
    this.auth.authState.subscribe((user) => {
      this.lodowka.zjedzProdukt(user.uid, this.data.product.id, 100);
      this.dialogRef.close();
    });
  }
  takeOfProduct() {
    this.auth.authState.subscribe((user) => {
      this.lodowka.wyjmijProdukt(user.uid, this.data.product.id);
      this.dialogRef.close();
    });
  }
  // onClick(): void {
  //   this.modalCreator.openDialogEatenProduct().subscribe((produkt) => {
  //     console.log("dostalem produkt", produkt)
  //     if (produkt) {
  //       this.auth.authState.subscribe((user) => {
  //         this.lodowka.dodajDoLodowki(user.uid, produkt);
  //       });
  //     }
  //   });
  // }
  closeModal(): void {
    this.dialogRef.close();
  }
}
