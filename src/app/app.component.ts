import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreSyncService } from 'ngx-auth-firebaseui';
import { DrawerRightService } from './services/drawerRight/drawer-right.service';
import firebase from 'firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Praca-inzynierska';
  public user: firebase.User
  public href: string = "";
  constructor(public auth: AngularFireAuth, private router: Router, public drawerRightService: DrawerRightService) {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    })
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.catchTitle();
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();

  }

  catchTitle() {

    let url = this.router.url
    if (url == '/lodowka') {
      url = "Lodówka"
    } else if (url == '/user') {
      url = "Profil"
    }
    else if (url == '/tabelaKalorii') {
      url = "Tabela kalorii"
    }
    else if (url == '/') {
      url = "Moja dieta"
    }
    this.href = url;
    console.log(this.router.url);
  }

  isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
  }
}
