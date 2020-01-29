import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filters: any;
  selectedFilter = {};

  constructor(private filterService: FilterService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.filters = this.filterService.filters;
    console.log(this.filters);
  }

  setFilters(event) {
  let onFilters = [];
    console.log(event.target.value, event.target.checked);
    if (event.target.value && event.target.checked) {
      this.selectedFilter[event.target.value] = event.target.checked;
    }
    else {
      for (let index in this.selectedFilter) {
        if(index === event.target.value) {
          console.log(index);
          delete this.selectedFilter[index];
        }
      }
    }
    for(let i in this.selectedFilter) {
      onFilters.push(i);
    }
    this.sharedService.filterCharacters(onFilters);
  }

}
