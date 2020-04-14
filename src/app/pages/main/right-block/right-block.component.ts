import { Component, OnInit } from '@angular/core';
import {MapService} from '../../../services';
import {Observable} from 'rxjs';
import {LatLng} from 'leaflet';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.scss']
})
export class RightBlockComponent implements OnInit {

  coordinates: LatLng[];

  constructor(
    private _mapService: MapService
  ) { }

  ngOnInit(): void {
    this._getCoordinates();
  }

  deleteCoordinate(i: number) {
    this.coordinates.splice(i, 1);
  }

  private _getCoordinates() {
    this._mapService.deletedMarkers$.
      subscribe((res: LatLng[]) => this.coordinates = res);
  }
}
