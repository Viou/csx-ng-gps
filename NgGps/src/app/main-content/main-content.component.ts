import { Component, OnInit, Input } from '@angular/core';
import { MainContent} from '../shared/mainContent.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input()
  mainContentData: MainContent;
  constructor() { }

  ngOnInit() {
  }

}
