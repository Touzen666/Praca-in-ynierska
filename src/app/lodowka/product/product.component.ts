import { ModalCreatorService } from './../../services/modal-creator/modal-creator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(public modalCreator: ModalCreatorService) {}

  public openModal = this.modalCreator;
  ngOnInit(): void {}
}
