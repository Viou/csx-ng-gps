import {Component, Input, OnInit} from '@angular/core';
import {LargeIconCard} from '../../../shared/largeIconCard.model';

@Component({
  selector: 'app-large-icon-card',
  templateUrl: './large-icon-card.component.html',
  styleUrls: ['./large-icon-card.component.scss']
})
export class LargeIconCardComponent implements OnInit {
  @Input()
  styles: {};
  @Input()
  title: string;
  @Input()
  value: number;
  @Input()
  icon: string;

  constructor() { }

  ngOnInit() {
  }

}
