import {ITree} from '../models';

export const treeData: ITree[] = [
  {
    label: 'Map 1',
    value: [
      {
        label: 'Sub map 1.1',
        value: [
          {
            label: 'Sub sub map 1.1',
            value: [
              [55.751244, 37.618423],
              [55.751244, 37.618423]
            ]
          },
          {
            label: 'Sub sub map 1.2',
            value: [
              [55.751244, 37.618423],
              [55.751244, 37.618423]
            ]
          }
        ]
      },
      {
        label: 'Sub map 1.2',
        value: [
          {
            label: 'Sub sub map',
            value: [
              [55.751244, 37.618423],
              [55.751244, 37.618423]
            ]
          }
        ]
      }
    ]
  }
];
