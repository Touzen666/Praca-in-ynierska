import { ModalCreatorService } from './../../services/modal-creator/modal-creator.service';
import { Component, Input, OnInit } from '@angular/core';
import { Produkt } from 'src/app/models/produkt';

@Component({
  selector: 'app-product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(public modalCreator: ModalCreatorService) { }
  @Input() product: Produkt;

  public openModal = this.modalCreator;
  ngOnInit(): void { }
}
