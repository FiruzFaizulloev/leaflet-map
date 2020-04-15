import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {LatLngExpression, LayerGroup, Marker} from 'leaflet';
import {MapService} from '../../../services';
import {LatLng} from 'leaflet';
import {ILatLng} from '../../../models';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any;
  private _layerGroup: LayerGroup;
  private _deletedMarkers: LatLng[] = [];
  private _moskowLatLng: LatLngExpression = [55.751244, 37.618423];
  private _zoom = 8;

  constructor(
    private _mapService: MapService
  ) { }

  ngOnInit(): void {
    this._initMap();
    this._getMarkers();
  }

  private _initMap() {
    this.map = L.map('map').setView(this._moskowLatLng, this._zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png')
      .addTo(this.map);
    this._layerGroup = L.layerGroup().addTo(this.map);
  }

  private _getMarkers() {
    this._mapService.markers$
      .subscribe((markers: any) => this._setMarkers(markers));
  }

  private _setMarkers(markers: any) {
    this._layerGroup.clearLayers();
    markers.forEach((item: ILatLng) => {
      const marker = L.marker([item.lat, item.lng]);
      marker.on('mouseover', () => this._onMarkerHover(marker));
      marker.addTo(this._layerGroup);
    });
  }

  private _onMarkerHover(marker: Marker) {
    this._deletedMarkers.push(marker.getLatLng());
    this._mapService.deletedMarkers$.next(this._deletedMarkers);
    this._layerGroup.removeLayer(marker);
  }
}
