'use client';

import { configureStore } from "@reduxjs/toolkit";
import toastSlice from "./feature/toast/toastSlice";

export const store = configureStore({
  reducer: {
    toast: toastSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch