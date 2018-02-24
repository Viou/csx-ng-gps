import { Component, OnInit, Input, DoCheck,KeyValueDiffers} from '@angular/core';
import { LocoGpsData } from '../../shared/locoGpsData.model';
import {MatTableDataSource} from '@angular/material';
import { LocoGpsService } from '../../services/loco-gps/loco-gps.service';
import { MainContent } from '../../shared/mainContent.model';

@Component({
  selector: 'app-loco-gps-table',
  templateUrl: './loco-gps-table.component.html',
  styleUrls: ['./loco-gps-table.component.scss']
})

export class LocoGpsTableComponent implements OnInit {
  @Input()
  locoGpsData: LocoGpsData[] = [];
  dataSource = new MatTableDataSource(this.locoGpsData);
	differ: any;

  // displayedColumns = ['locoId', 'trainId', 'deviceId', 'lat', 'long', 'speed', 'signalStrength',
  //   'signalQuality', 'subdivision', 'reportDate']
  displayedColumns = ['locoId', 'trainId', 'subdivision', 'reportDate', 'speed']
  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find(this.locoGpsData).create();
   }

  ngOnInit() {
  }

  ngDoCheck(){
    var changes = this.differ.diff(this.locoGpsData);
    if(changes) {
      this.dataSource = new MatTableDataSource(this.locoGpsData);
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



}

