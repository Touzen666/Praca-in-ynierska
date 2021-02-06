import { ModalCreatorComponent } from './../../modals/modal-creator/modal-creator.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.css'],
})
export class AddProductButtonComponent implements OnInit {
  constructor(public modalCreator: ModalCreatorComponent) {}

  public openModal = this.modalCreator;
  ngOnInit(): void {}
}
