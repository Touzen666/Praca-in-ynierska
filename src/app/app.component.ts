import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreSyncService } from 'ngx-auth-firebaseui';
import { DrawerRightService } from './services/drawerRight/drawer-right.service';
import firebase from 'firebase';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Praca-inzynierska';
  public user: firebase.User
  public href: string = "";
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    public drawerRightService: DrawerRightService
  ) {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    })
  }
  ngOnInit(): void {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.route.data.subscribe(data => {
    //       this.href = data["pageName"]
    //       console.log(data);
    //     })
    //   }
    // });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) route = route.firstChild
        return route
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.href = data["pageName"]
    }
    )
  }
  ngAfterViewInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
  }
}
