import { LodowkaService } from './../services/lodowka.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private lodowkaService: LodowkaService) {}

  ngOnInit(): void {
    this.lodowkaService.getRef();
  }
}
