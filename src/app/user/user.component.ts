import { Component, OnInit } from '@angular/core';
import { AuthProvider, LinkMenuItem } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  providers = AuthProvider;
  printLog: Function;
  constructor(private router: Router) { }

  links: LinkMenuItem[];

  ngOnInit(): void {

  }

  redirectToFridge() {
    this.router.navigate(["/lodowka"])
  }
}


