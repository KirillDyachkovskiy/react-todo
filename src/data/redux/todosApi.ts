import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TExpandedList, TList, TMenuItem, TTask } from '../types';

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Tasks', 'Lists'],
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
      providesTags: ['Tasks', 'Lists'],
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
    renameList: builder.mutation<TTask, { listId: number; name: string }>({
      query: ({ name, listId }) => ({
        url: `lists/${listId}`,
        method: 'PATCH',
        body: { name },
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
    setTaskStatus: builder.mutation<
      TTask,
      { completed: boolean; taskId: number }
    >({
      query: ({ completed, taskId }) => ({
        url: `tasks/${taskId}`,
        method: 'PATCH',
        body: { completed },
      }),
      invalidatesTags: ['Tasks'],
    }),
    renameTask: builder.mutation<TTask, { text: string; taskId: number }>({
      query: ({ text, taskId }) => ({
        url: `tasks/${taskId}`,
        method: 'PATCH',
        body: { text },
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation<TTask, { taskId: number }>({
      query: ({ taskId }) => ({
        url: `tasks/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetSectionsQuery,
  useGetListsQuery,
  usePostListMutation,
  useRenameListMutation,
  useDeleteListMutation,
  usePostTaskMutation,
  useRenameTaskMutation,
  useDeleteTaskMutation,
  useSetTaskStatusMutation,
} = todosApi;
