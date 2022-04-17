import { ReactNode } from 'react';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const todoAPI = {
  getLists: () =>
    instance.get<TTodoResponse>('lists?_embed=tasks&_expand=color'),
  getColors: () => instance.get<TColorsResponse>('colors'),
  postList: (data: TPostListResponse) => instance.post<TList>('lists', data),
  postTask: (data: TPostTaskResponse) => instance.post<TTask>('tasks', data),
};

export type TTodoResponse = TExpandedList[];
export type TColorsResponse = TColor[];
export type TPostListResponse = Omit<TList, 'id'>;
export type TPostTaskResponse = Omit<TTask, 'id'>;

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
