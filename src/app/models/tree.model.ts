export interface ITree {
  label: string;
  selected?: boolean;
  value: ITree[] | number[][];
}
