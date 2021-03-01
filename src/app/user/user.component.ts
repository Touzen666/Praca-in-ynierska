import { Component, OnInit } from '@angular/core';
import { AuthProvider, LinkMenuItem } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  providers = AuthProvider;
  printLog: Function;

  public user: firebase.User

  constructor(private router: Router, public auth: AngularFireAuth) {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    })
  }

  links: LinkMenuItem[];

  ngOnInit(): void {

  }

  redirectToFridge() {
    this.router.navigate(["/lodowka"])
  }
}


