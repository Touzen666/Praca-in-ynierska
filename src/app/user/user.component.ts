import { LodowkaService } from '../services/lodowka/lodowka.service';
import { Component, OnInit } from '@angular/core';
import { AuthProvider, LinkMenuItem } from 'ngx-auth-firebaseui';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  providers = AuthProvider;
  printLog: Function;
  constructor() { }

  links: LinkMenuItem[];

  ngOnInit(): void {

  }
}


