import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters-options',
  templateUrl: './filters-options.component.html',
  styleUrls: ['./filters-options.component.css']
})
export class FiltersOptionsComponent implements OnInit {

  constructor() {
    var date = new Date();
    const fromDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const toDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    this.range = new FormGroup({
      start: new FormControl(fromDate),
      end: new FormControl(toDate)
    });
  }

  ngOnInit(): void {
  }

}
