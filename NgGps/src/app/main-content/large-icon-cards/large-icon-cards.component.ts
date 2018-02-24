import { Component, OnInit, Input } from '@angular/core';
import { LargeIconCard } from '../../shared/largeIconCard.model';

@Component({
  selector: 'app-large-icon-cards',
  templateUrl: './large-icon-cards.component.html',
  styleUrls: ['./large-icon-cards.component.scss']
})
export class LargeIconCardsComponent implements OnInit {
  @Input()
  largeIconCardList: LargeIconCard[];
  constructor() { }

  ngOnInit() {
  }

}
