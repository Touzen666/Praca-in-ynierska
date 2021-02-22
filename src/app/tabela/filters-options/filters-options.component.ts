import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { TableService } from 'src/app/services/table/table.service';
import firebase from 'firebase';

@Component({
  selector: 'app-filters-options',
  templateUrl: './filters-options.component.html',
  styleUrls: ['./filters-options.component.css']
})
export class FiltersOptionsComponent implements OnInit {
  range: FormGroup;
  public user: firebase.User | null;

  constructor(
    private tableService: TableService,
  ) {
    this.range = new FormGroup({
      start: new FormControl(this.tableService.range.value.start),
      end: new FormControl(this.tableService.range.value.end)
    });
  }

  ngOnInit(): void {
  }
  refreshSubscription() {

    this.tableService.setTime(this.range.value);
    this.tableService.refreshSubscription();

  }
}
