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
    private auth: AngularFireAuth
  ) {
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
  refreshSubscription() {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      // console.log(this.range.value);
      this.tableService.refreshSubscription();
      this.tableService.setTime(this.user, this.range.value.start);
    });
  }
}
