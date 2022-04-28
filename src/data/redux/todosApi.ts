import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TExpandedList, TList, TTask } from '../types';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Lists'],
  endpoints: (builder) => ({
    getLists: builder.query<TExpandedList[], null>({
      query: () => ({
        url: 'lists',
        params: {
          _embed: 'tasks',
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
      invalidatesTags: ['Lists'],
    }),
    setTaskStatus: builder.mutation<TTask, { completed: boolean; id: number }>({
      query: ({ completed, id }) => ({
        url: `tasks/${id}`,
        method: 'PATCH',
        body: { completed },
      }),
      invalidatesTags: ['Lists'],
    }),
  }),
});

export const {
  useGetListsQuery,
  usePostListMutation,
  useDeleteListMutation,
  usePostTaskMutation,
  useSetTaskStatusMutation,
} = todosApi;
