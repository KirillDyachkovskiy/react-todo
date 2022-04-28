import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import { todosApi } from './todosApi';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const selectActiveListId = (state: RootState) =>
  state.filters.activeListId;

export default store;
