import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerRightService {
  open: boolean = false;

  constructor() { }

  toggle() {
    this.open = !this.open
  }
}
