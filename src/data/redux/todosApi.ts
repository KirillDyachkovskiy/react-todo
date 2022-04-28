import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TExpandedList, TList, TMenuItem, TTask } from '../types';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Lists', 'Tasks'],
  endpoints: (builder) => ({
    getSections: builder.query<TExpandedList[], { id: number }>({
      query: ({ id }) => ({
        url: 'lists',
        params: {
          _embed: 'tasks',
          _expand: 'color',
          ...(id && { id }),
        },
      }),
      providesTags: ['Tasks'],
    }),
    getLists: builder.query<TMenuItem[], null>({
      query: () => ({
        url: 'lists',
        params: {
          _expand: 'color',
        },
      }),
      providesTags: ['Lists'],
    }),
    postList: builder.mutation<TList, TList>({
      query: (body) => ({
        url: 'lists',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Lists'],
    }),
    deleteList: builder.mutation<TList, { id: number }>({
      query: ({ id }) => ({
        url: `lists/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Lists'],
    }),
    postTask: builder.mutation<TTask, TTask>({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    setTaskStatus: builder.mutation<TTask, { completed: boolean; id: number }>({
      query: ({ completed, id }) => ({
        url: `tasks/${id}`,
        method: 'PATCH',
        body: { completed },
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetSectionsQuery,
  useGetListsQuery,
  usePostListMutation,
  useDeleteListMutation,
  usePostTaskMutation,
  useSetTaskStatusMutation,
} = todosApi;
