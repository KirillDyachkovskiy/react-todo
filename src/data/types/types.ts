import { ReactNode } from 'react';

export type TExpandedList = TList & {
  tasks: TTask[];
  color: TColor;
};

export type TList = {
  id: number;
  name: string;
  colorId: number;
};

export type TItems = TExpandedList & {
  icon?: ReactNode;
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
