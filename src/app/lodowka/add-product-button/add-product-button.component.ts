import { LodowkaService } from '../../services/lodowka/lodowka.service';
import { ModalCreatorService } from './../../services/modal-creator/modal-creator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.css'],
})
export class AddProductButtonComponent implements OnInit {
  constructor(
    public modalCreator: ModalCreatorService,
    public lodowka: LodowkaService
  ) {}

  onClick(): void {
    this.modalCreator.openDialogAddProduct().subscribe((produkt) => {
      // TODO send event
      // TODO get user info
      // this.lodowka.dodajDoLodowki(userId,  produkt);
    });
  }

  ngOnInit(): void {}
}
