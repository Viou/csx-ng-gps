import { Component, OnInit, Input, DoCheck,KeyValueDiffers} from '@angular/core';
import { LocoGpsData } from '../../shared/locoGpsData.model';
import {MatTableDataSource} from '@angular/material';
import { LocoGpsService } from '../../services/loco-gps/loco-gps.service';
import { MainContent } from '../../shared/mainContent.model';
import {Inject} from '@angular/core';
import { dialogComponent } from '../../shared/dialogComponent.model';
import {Router} from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';
import { People } from '../../shared/people.model';


@Component({
  selector: 'app-loco-gps-table',
  templateUrl: './loco-gps-table.component.html',
  styleUrls: ['./loco-gps-table.component.scss']
})

export class LocoGpsTableComponent implements OnInit {
  @Input()
  locoGpsData: LocoGpsData[] = [];
  peopledata : People[]=[];
  chosen : People;
  dataSource = new MatTableDataSource(this.locoGpsData);
  differ: any;


  // displayedColumns = ['locoId', 'trainId', 'deviceId', 'lat', 'long', 'speed', 'signalStrength',
  //   'signalQuality', 'subdivision', 'reportDate']
  displayedColumns = ['locoId', 'trainId', 'subdivision', 'reportDate', 'speed', 'stats'];
  randomIndex = 0;
  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find(this.locoGpsData).create();
   }

  ngOnInit() {

    this.peopledata.push(new People ("Griffin", "./../../assets/images/griffin.jpg",1000000,0 , "Griffin's favorite part of being a conductor is honking the horn."));
    this.peopledata.push(new People ("Dennis", "./../../assets/images/dennis.jpg", 5, 5, "He likes the freedom of being on the open rail"));
    this.peopledata.push(new People ("Bob", "./../../assets/images/bob.jpg", 1000, 100, "Never met a speed ordiance that he liked. Likes waking up towns in the morning with his horn."));
    this.peopledata.push(new People ("Jason", "./../../assets/images/jason.jpg", 50, 5, "Like to run trains fast, cheap and efficiently."));
    this.peopledata.push(new People ("Amanda", "./../../assets/images/amanda.jpg", 1, 500, "Likes catching train speeders."));
    this.chosen = this.peopledata[0];

  }

  userLike() {
    this.chosen.likes = this.chosen.likes + 1;
  }

  userRepimend() {
    this.chosen.reprimands = this.chosen.reprimands + 1;
  }

  ngDoCheck(){
    const changes = this.differ.diff(this.locoGpsData);
    if (changes) {
      this.dataSource = new MatTableDataSource(this.locoGpsData);
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  randomize(element){
      this.randomIndex = (this.randomIndex + 1 ) % 5;
      this.chosen = this.peopledata[this.randomIndex];
      console.log(this.randomIndex);
      console.log(this.peopledata);
  }
}
