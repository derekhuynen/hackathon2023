import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
};

export type ProjectState = {
  projects: Array<Project>;
  loading: boolean;
  error: string;
};

export const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: '',
};

export const projectSlice = createSlice({
  name: 'project',
  initialState: initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Array<Project>>) => {
      state.projects = action.payload;
    },
    fetchProjects: (state) => {
      state.projects = [];
      state.loading = true;
    },
    fetchProjectsSuccess: (state, action: PayloadAction<Array<Project>>) => {
      state.projects = action.payload;
      state.loading = false;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    updateProjectById: (state, action: PayloadAction<Project>) => {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        }
        return project;
      });
    },
    removeProjectById: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter((project) => project.name !== action.payload);
    },
  },
});

export default projectSlice.reducer;
export const { setProjects, fetchProjects, fetchProjectsSuccess, addProject, updateProjectById, removeProjectById } = projectSlice.actions;
export const selectProjectStore = (state: RootState) => state.project;
