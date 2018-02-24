import { Component, OnInit, Input } from '@angular/core';
import { LocoGpsData } from '../../shared/locoGpsData.model';

@Component({
  selector: 'app-loco-gps-table',
  templateUrl: './loco-gps-table.component.html',
  styleUrls: ['./loco-gps-table.component.scss']
})
export class LocoGpsTableComponent implements OnInit {
  @Input()
  locoGpsData: LocoGpsData[];

  // displayedColumns = ['locoId', 'trainId', 'deviceId', 'lat', 'long', 'speed', 'signalStrength',
  //   'signalQuality', 'subdivision', 'reportDate']
  displayedColumns = ['locoId', 'trainId', 'subdivision', 'lat', 'long', 'reportDate', 'speed', 'stats']
  constructor() { }

  ngOnInit() {
  }

}
