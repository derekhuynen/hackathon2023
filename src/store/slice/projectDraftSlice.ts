import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { mockProjects } from 'mock/mockProjects';

export type ProjectDraft = {
  id: string;
  name: string;
  category: string;
  description: string;
};

export type ProjectDraftState = {
  projects: Array<ProjectDraft>;
  loading: boolean;
  error: string;
};

export const initialState: ProjectDraftState = {
  projects: mockProjects,
  loading: false,
  error: '',
};

export const projectDraftSlice = createSlice({
  name: 'projectDraft',
  initialState: initialState,
  reducers: {
    setDraftProjects: (state, action: PayloadAction<Array<ProjectDraft>>) => {
      state.projects = action.payload;
    },
    fetchDraftProjects: (state) => {
      state.projects = [];
      state.loading = true;
    },
    fetchDraftProjectsSuccess: (state, action: PayloadAction<Array<ProjectDraft>>) => {
      state.projects = action.payload;
      state.loading = false;
    },
    addDraftProject: (state, action: PayloadAction<ProjectDraft>) => {
      state.projects.push(action.payload);
    },
    updateDraftProjectById: (state, action: PayloadAction<ProjectDraft>) => {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        }
        return project;
      });
    },
  },
});

export const { setDraftProjects, fetchDraftProjects, fetchDraftProjectsSuccess, addDraftProject, updateDraftProjectById } = projectDraftSlice.actions;
export default projectDraftSlice.reducer;

export const selectProjectDraftStore = (state: RootState) => state.projectDraft;
