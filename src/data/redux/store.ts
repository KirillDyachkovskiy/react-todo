import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './todosApi';

const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
