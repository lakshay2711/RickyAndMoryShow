import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sortBy: string = "asc";

  constructor(private sharedService: SharedService) { }

  ngOnInit() { 
  }
  
  onChangeCategory() {
    this.sharedService.sortCharacters(this.sortBy);
  }

}
