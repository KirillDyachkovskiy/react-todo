export type TColorOld =
  | 'grey'
  | 'green'
  | 'blue'
  | 'pink'
  | 'lightblue'
  | 'violet'
  | 'black'
  | 'red';

export type TList = {
  id: number;
  name: string;
  colorId: number;
};

export type TTask = {
  id: number;
  listId: number;
  text: string;
  completed: boolean;
};

export type TColor = {
  id: number;
  hex: string;
  name: string;
};
