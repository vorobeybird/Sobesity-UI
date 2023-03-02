/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import { api } from '@/services/api';
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
