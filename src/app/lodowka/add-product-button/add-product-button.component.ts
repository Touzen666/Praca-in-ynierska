import { LodowkaService } from '../../services/lodowka/lodowka.service';
import { ModalCreatorService } from './../../services/modal-creator/modal-creator.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.css'],
})
export class AddProductButtonComponent implements OnInit {
  constructor(
    public modalCreator: ModalCreatorService,
    public lodowka: LodowkaService,
    private auth: AngularFireAuth

  ) { }

  onClick(): void {
    this.modalCreator.openDialogAddProduct().subscribe((produkt) => {
      console.log("dostalem produkt", produkt)
      if (produkt) {
        this.auth.authState.subscribe((user) => {
          this.lodowka.dodajDoLodowki(user.uid, produkt);
        });
      }

    });
  }

  ngOnInit(): void { }
}
