import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ITree} from '../../models';
import {treeData} from '../../content';

@Injectable()
export class MainService {

  constructor() { }

  getTree(): Observable<ITree[]> {
    return of(treeData);
  }
}
