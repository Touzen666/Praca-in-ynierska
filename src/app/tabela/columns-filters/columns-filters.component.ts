import { Component, OnInit } from '@angular/core';
import { TableService, ColumnFilters } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-columns-filters',
  templateUrl: './columns-filters.component.html',
  styleUrls: ['./columns-filters.component.css']
})
export class ColumnsFiltersComponent implements OnInit {

  public checkboxes = [
    { column: "quantity", label: "Ilość" },
    { column: "calories", label: "Kalorie" },
    { column: "weight", label: "Waga" },
    { column: "carbohydrates", label: "Węglowodany" },
    { column: "proteines", label: "Białko" },
    { column: "fat", label: "Tłuszcze" },
  ]

  public filter: ColumnFilters

  constructor(
    private tableService: TableService,
  ) { }

  ngOnInit(): void {
    this.tableService.columnFilters.subscribe(filter => {
      this.filter = filter
    })
  }

  updateFilter() {
    this.tableService.setFilters(this.filter)
  }

}
