import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export type MyTheme = 'LIGHT' | 'DARK';

type ConfigState = {
  theme: MyTheme;
};

export const initialState: ConfigState = {
  theme: 'DARK',
};

export const configSlice = createSlice({
  name: 'config',
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'LIGHT' | 'DARK'>) => {
      state.theme = action.payload;
    },
  },
});

export default configSlice.reducer;
export const { setTheme } = configSlice.actions;

export const selectConfig = (state: RootState) => state.config;
