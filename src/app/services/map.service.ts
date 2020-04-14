import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {LatLng} from 'leaflet';

@Injectable()
export class MapService {

  markers$ = new Subject<number[][]>();
  deletedMarkers$ = new Subject<LatLng[]>();

  constructor() { }
}
