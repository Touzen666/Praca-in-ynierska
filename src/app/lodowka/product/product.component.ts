import { ModalCreatorComponent } from './../../modals/modal-creator/modal-creator.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(public modalCreator: ModalCreatorComponent) {}

  public openModal = this.modalCreator;
  ngOnInit(): void {}
}
