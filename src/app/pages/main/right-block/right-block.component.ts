import { Component, OnInit } from '@angular/core';
import {MapService} from '../../../services';
import {ILatLng} from '../../../models';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.scss']
})
export class RightBlockComponent implements OnInit {

  coordinates: ILatLng[];

  constructor(
    private _mapService: MapService
  ) { }

  ngOnInit(): void {
    this._getCoordinates();
  }

  deleteCoordinate(coordinate: ILatLng, index: number) {
    this._mapService.deletedCoordinate$.next(coordinate);
    this.coordinates.splice(index, 1);
  }

  private _getCoordinates() {
    this._mapService.deletedMarkers$.
      subscribe((res: ILatLng[]) => this.coordinates = res);
  }
}
