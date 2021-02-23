import { Component, OnInit } from '@angular/core';
import { DrawerRightService } from 'src/app/services/drawerRight/drawer-right.service';

@Component({
  selector: 'app-filters-button',
  templateUrl: './filters-button.component.html',
  styleUrls: ['./filters-button.component.css']
})
export class FiltersButtonComponent implements OnInit {

  constructor(public drawerRightService: DrawerRightService) { }

  ngOnInit(): void {

  }

}
