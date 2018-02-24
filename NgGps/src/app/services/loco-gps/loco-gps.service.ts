import { Injectable } from '@angular/core';
import { ApiKey } from './../secret/apiKey.model';
import { LocoGpsData } from '../../shared/locoGpsData.model';

declare const apigClientFactory;

@Injectable()
export class LocoGpsService {

  apiKey = new ApiKey();
  apigClient = apigClientFactory.newClient({
    accessKey: this.apiKey.accessKey,
    secretKey: this.apiKey.secretKey,
    region: this.apiKey.region
  });

  getLocoGpsData(trainId: string, subdivision: string): Promise<any> {
    return this.invokeAWS(trainId, subdivision);
  }
  invokeAWS(trainId: string, subdivision): Promise<any> {
    const body = {};
    const bodyContents = [];
    if (trainId) {
      bodyContents.push(['train_i', trainId]);
    }
    if (subdivision) {
      bodyContents.push(['trans_subdiv_c', subdivision]);
    }
    for (let i = 0; i < bodyContents.length; i++) {
      body[bodyContents[i][0]] = bodyContents[i][1];
    }
    console.log(bodyContents);
    console.log(body);
    const promise = this.apigClient.rootPost('', body, '')
      .then(
        res => res.data
      ).then(
        data => data.map(item => {
          return new LocoGpsData(
            item.device_i,
            item.latitude_m,
            item.loco_i,
            item.loco_speed_m,
            item.longitude_m,
            item.report_est_d,
            item.signal_quality_c,
            item.signal_strength_m,
            item.train_i,
            item.trans_subdiv_c);
        })
      )
      .catch(
        res => console.log('ERROR' + res)
      );
    return promise;
  }
  constructor() {}
}
