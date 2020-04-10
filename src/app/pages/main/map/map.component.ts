import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {LatLng} from 'leaflet';
import {LatLngExpression} from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any;
  private _moskowLatLng: LatLngExpression = [55.751244, 37.618423];
  private _zoom = 8;

  constructor() { }

  ngOnInit(): void {
    this._initMap();
  }

  private _initMap() {
    this.map = L.map('map').setView(this._moskowLatLng, this._zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);
  }

}
