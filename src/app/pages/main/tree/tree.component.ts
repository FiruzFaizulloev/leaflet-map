import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { ITree } from '../../../models';
import {MapService, TreeService} from '../../../services';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  tree$: Observable<ITree[]>;

  constructor(
    private _treeService: TreeService,
    private _mapService: MapService
  ) { }

  ngOnInit(): void {
    this._getTree();
  }

  onTreeClick(e, tree: any, i) {
    e.stopPropagation();
    const coordinates = this._getCoordinates(tree);
    tree.selected = true;
    console.log(i);
    this._mapService.markers$.next(coordinates);
  }

  private _getTree() {
    this.tree$ = this._treeService.getTree();
  }

  private _getCoordinates(tree: ITree): number[][] {
    const markers = [];

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
}
