export interface ITree {
  label: string;
  value: ISubTree[];
}

export interface ISubTree {
  label: string;
  value: ISubSubTree[];
}

export interface ISubSubTree {
  label: string;
  value: number[][];
}
