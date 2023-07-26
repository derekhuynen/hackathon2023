import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { OpenModal } from 'types/open-modal';

export type ModalState = {
  isOpen: boolean;
  title: string;
  content: React.ReactNode | null;
};

export const initialState: ModalState = {
  isOpen: false,
  title: '',
  content: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openModal: (state, action: PayloadAction<OpenModal>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = '';
      state.content = null;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;
