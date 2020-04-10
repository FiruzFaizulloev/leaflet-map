import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {Observable} from 'rxjs';
import {ITree} from '../../../models';

@Component({
  selector: 'app-left-block',
  templateUrl: './left-block.component.html',
  styleUrls: ['./left-block.component.scss']
})
export class LeftBlockComponent implements OnInit {

  tree$: Observable<ITree[]>;

  constructor(private _mainService: MainService) { }

  ngOnInit(): void {
    this._getTree();
  }

  private _getTree() {
    this.tree$ = this._mainService.getTree();
  }
}
