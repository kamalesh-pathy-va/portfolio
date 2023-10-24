'use client';

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 

export enum MessageType {
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface InitialState {
  messageType: MessageType;
  message: string;
  visible: boolean;
}

const initialState: InitialState = {
  messageType: MessageType.SUCCESS,
  message: '',
  visible: false,
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    display: (state, action: PayloadAction<InitialState>) => {
      state.message = action.payload.message
      state.messageType = action.payload.messageType
      state.visible = action.payload.visible
    },
    hide: (state) => {
      state.visible = false
    }
  }
});

export default toastSlice.reducer;
export const { display, hide } = toastSlice.actions;
