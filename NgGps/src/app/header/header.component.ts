import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderUserInput } from './../shared/headerUserInput.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInput = new HeaderUserInput();

  constructor() { }

  ngOnInit() {
    this.userInput.trainId = 'Q21602';
    this.userInput.subdivision = 'C3';
  }

  search() {
    this.searchDataset.emit(this.userInput);
  }

  @Output()
  searchDataset = new EventEmitter<HeaderUserInput>();

}
