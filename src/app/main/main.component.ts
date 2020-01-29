import { Component, OnInit, Input } from '@angular/core';
import { MainService, Description } from './main.service';
import { SharedService } from '../shared/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  characters: Description[];
  sortByCategory: string;
  selectedFilters = [];
  sortBy: string;
  filter = [];

  constructor(private mainService: MainService,
    private sharedService: SharedService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {

    //Sort the characters based on user selection
    this.sharedService._sortByObs.subscribe((sortStr: string) => {
      if (sortStr) {
        this.sortBy = sortStr;
        this.getSortCharacters(sortStr);
      }
    });

    //Sort the characters based on user selection
    this.sharedService._filterObs.subscribe((filter) => {
      if (filter != null) {
        this.filterCharacters(filter);
      }
      else {
        this.getSortCharacters(this.sortBy);
      }
    });

  }

  filterCharacters(filter) {
    this.filter = filter;
    this.spinner.show();
    this.mainService.getAllCharacters().then((response) => {
      if (filter.length > 0) {
        console.log(filter);
        let tempArray = [];
        for (let index = 0; index < response.length; index++) {
          for (const iterator of filter) {
            if (iterator === response[index].species.toLowerCase() ||
              iterator === response[index].gender.toLowerCase() ||
              iterator === response[index].origin.toLowerCase()) {
              if (tempArray.some(el => el === response[index])) {
                console.log('I am already there');
              }
              else {
                tempArray.push(response[index]);
              }
            }
          }
        }
        console.log(tempArray);
        this.characters = tempArray;
        if (sortByCategory.ASCENDING === this.sortBy) {
          this.characters = (this.characters.sort(function (a, b) {
            return a.id - b.id;
          }));
        }
        else {
          this.characters = (this.characters.sort(function (a, b) {
            return b.id - a.id;
          }));
        }

        this.spinner.hide();
      }
      else {
        this.getSortCharacters(this.sortBy);
      }
    })

  }

  //Helper Function to sort the array by category
  getSortCharacters(sortStr) {
    let array = [];
    this.spinner.show();
    if (this.filter.length === 0) {
      this.mainService.getAllCharacters().then(response => {
        console.log(response);
        if (response && response.length > 0) {
          if (sortByCategory.ASCENDING === sortStr) {
            array = (response.sort(function (a, b) {
              return a.id - b.id;
            }));
          }
          else {
            array = (response.sort(function (a, b) {
              return b.id - a.id;
            }));
          }
          this.characters = [...array];
        }
      });
    }
    else {
      let tempArray = [];
      for (let index = 0; index < this.characters.length; index++) {
        for (const iterator of this.filter) {
          if (iterator === this.characters[index].species.toLowerCase() ||
            iterator === this.characters[index].gender.toLowerCase() ||
            iterator === this.characters[index].origin.toLowerCase()) {
            if (tempArray.some(el => el === this.characters[index])) {
              console.log('I am already there');
            }
            else {
              tempArray.push(this.characters[index]);
            }
          }
        }
      }
      console.log(tempArray);
      if (sortByCategory.ASCENDING === this.sortBy) {
        this.characters = (tempArray.sort(function (a, b) {
          return a.id - b.id;
        }));
      }
      else {
        this.characters = (tempArray.sort(function (a, b) {
          return b.id - a.id;
        }));
      }
      console.log(this.characters);
    }
    this.spinner.hide();
  }

}

export enum sortByCategory {
  ASCENDING = "asc",
  DESCENDING = "des"
}