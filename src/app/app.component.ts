import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreSyncService } from 'ngx-auth-firebaseui';
import { DrawerRightService } from './services/drawerRight/drawer-right.service';
import firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Praca-inzynierska';
  public user: firebase.User
  constructor(public auth: AngularFireAuth, public drawerRightService: DrawerRightService) {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    })
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();

  }
}
