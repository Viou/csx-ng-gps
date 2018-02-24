import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderUserInput } from './../shared/headerUserInput.model';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  searchDataset = new EventEmitter<HeaderUserInput>();
  userInput = new HeaderUserInput();
  myControl: FormControl = new FormControl();

  subDivs = ['AA', 'AB', 'AC', 'AG', 'AK', 'AN', 'AR', 'AU', 'AV', 'AW', 'B0', 'B1', 'B2', 'B7', 'B8', 'B9', 'BC', 'BE', 'BF', 'BI', 'BJ',
    'BK', 'BL', 'BM', 'BN', 'BO', 'BR', 'BS', 'BU', 'BV', 'BX', 'BZ', 'C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'CA',
    'CC', 'CD', 'CE', 'CH', 'CK', 'CL', 'CM', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CY', 'CZ', 'DA', 'DB', 'DC', 'DL', 'DO',
    'DT', 'DV', 'EA', 'EB', 'EK', 'EL', 'ET', 'EV', 'EW', 'FF', 'FG', 'FH', 'FI', 'FN', 'FP', 'FR', 'FS', 'FT', 'FU', 'FZ', 'GA', 'GH',
    'GM', 'GR', 'GU', 'GW', 'HA', 'HB', 'HD', 'HE', 'HL', 'HO', 'HS', 'HT', 'HV', 'HW', 'IC', 'ID', 'IL', 'IP', 'IT', 'JR', 'JS', 'JT',
    'KD', 'KI', 'KN', 'KP', 'KW', 'L0', 'LA', 'LC', 'LE', 'LF', 'LG', 'LH', 'LI', 'LK', 'LN', 'LP', 'LR', 'LS', 'LT', 'LY', 'M0', 'M2',
    'M4', 'M5', 'M7', 'MB', 'MC', 'ME', 'MH', 'MK', 'ML', 'MM', 'MN', 'MP', 'MS', 'MT', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'ND', 'NG',
    'NH', 'NK', 'NL', 'NM', 'NO', 'NP', 'NR', 'NV', 'NY', 'OB', 'OM', 'OR', 'P0', 'P2', 'P4', 'P5', 'P6', 'P7', 'PA', 'PB', 'PC', 'PD',
    'PF', 'PH', 'PI', 'PJ', 'PL', 'PM', 'PN', 'PO', 'PS', 'PT', 'PU', 'PW', 'PY', 'RC', 'RI', 'RM', 'RR', 'RS', 'RT', 'RV', 'RZ', 'S0',
    'S2', 'S3', 'S4', 'S7', 'SA', 'SB', 'SC', 'SE', 'SF', 'SH', 'SJ', 'SK', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SY', 'TB', 'TD',
    'TH', 'TL', 'TM', 'TN', 'TO', 'TP', 'TR', 'TT', 'VI', 'VL', 'VN', 'WA', 'WD', 'WE', 'WM', 'WQ', 'WS', 'WT', 'WW', 'WX', 'XB', 'XC',
    'YB', 'YE', 'Z1', 'ZA', 'ZB', 'ZD', 'ZE', 'ZZ', 'AL', 'RH', 'RP'];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
<<<<<<< HEAD
    this.userInput.trainId = '';
    this.userInput.subdivision = 'C3';
=======
    this.userInput.trainId = 'CUMBED';
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
>>>>>>> da41e5e144c5184201652d1563df8774d2df005c
  }

  filter(val: string): string[] {
    return this.subDivs.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  search() {
    console.log(this.userInput);
    this.searchDataset.emit(this.userInput);
  }
}
