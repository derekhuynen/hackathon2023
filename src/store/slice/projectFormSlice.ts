import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export type ProjectState = {
  id: string | null;
  name: string;
  category: string;
  description: string;
};

export const initialState: ProjectState = {
  id: null,
  name: '',
  category: '',
  description: '',
};

export const projectFormSlice = createSlice({
  name: 'projectForm',
  initialState: initialState,
  reducers: {
    setProject: (state, action: PayloadAction<ProjectState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.category = action.payload.category;
      state.description = action.payload.description;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    clear: (state) => {
      state.id = null;
      state.name = '';
      state.category = '';
      state.description = '';
    },
  },
});

export const { setProject, setName, setCategory, setDescription, clear } = projectFormSlice.actions;
export default projectFormSlice.reducer;

export const selectProjectForm = (state: RootState) => state.projectForm;
