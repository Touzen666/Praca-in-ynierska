import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Produkt } from 'src/app/models/produkt';
import { LodowkaService } from 'src/app/services/lodowka/lodowka.service';
import { ModalCreatorService } from 'src/app/services/modal-creator/modal-creator.service';

@Component({
  selector: 'app-product-detale',
  templateUrl: './product-detale.component.html',
  styleUrls: ['./product-detale.component.css'],
})
export class ProductDetaleComponent implements OnInit {
  public title = 'Produkt';
  @Input() product: Produkt;
  constructor(
    // public modalCreator: ModalCreatorService,
    public lodowka: LodowkaService,
    private auth: AngularFireAuth,
    public dialogRef: MatDialogRef<ProductDetaleComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() { }

  eatProduct() {
    // this.modalCreator.openDialogDetailsProduct().subscribe((produkt) => {
    //   console.log("Wziąłem produkt", produkt)
    //   this.auth.authState.subscribe((user) => {
    //     this.lodowka.wyjmijZLodowki(user.uid, produkt.id);
    //     this.dialogRef.close();
    //   });
    // });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
