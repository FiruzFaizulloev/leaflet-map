import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ILatLng, ITree} from '../../../models';
import {MapService, TreeService} from '../../../services';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  trees: ITree[];

  constructor(
    private _treeService: TreeService,
    private _mapService: MapService
  ) { }

  ngOnInit(): void {
    this._getTree();
    this._getDeletedCoordinates();
  }

  onTreeClick(e, tree: any) {
    e.stopPropagation();
    const coordinates = this._getCoordinates(tree);
    tree.selected = true;
    this._mapService.markers$.next(coordinates);
  }

  private _getTree() {
    this._treeService.getTree()
      .subscribe((res: ITree[]) => this.trees = res);
  }

  private _getCoordinates(tree: ITree): ILatLng[] {
    const markers: ILatLng[] = [];

    const getMarkers = (coordinates) => {
      coordinates.value.forEach(item => {
        if (item.hasOwnProperty('value')) {
          return getMarkers(item);
        }
        markers.push(item);
      });
    };

    getMarkers(tree);

    return markers;
  }

  private _getDeletedCoordinates() {
    this._mapService.deletedCoordinate$
      .subscribe((res: ILatLng) => this._enableMenu(res));
  }

  private _enableMenu(coordinate: ILatLng) {
    const findCoordinate = (coordinates: any) => {
      coordinates.value.forEach((item: any) => {
        if (item.hasOwnProperty('value')) {
          return findCoordinate(item);
        }
        const checkCoordinate = coordinates.value.some((c: ILatLng) => {
          return c.lat === coordinate.lat && c.lng === coordinate.lng;
        });

        if (!checkCoordinate) {
          coordinates.selected = false;
        }
      });
    };

    this.trees.forEach(tree => findCoordinate(tree));
  }
}
