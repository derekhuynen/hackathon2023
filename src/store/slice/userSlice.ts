import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { User } from 'types/user';

export type UserState = {
  users: Array<User>;
  loading: boolean;
};

export const initialState: UserState = {
  users: [],
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<User>>) => {
      state.users = action.payload;
    },
    fetchUsers: (state) => {
      state.users = [];
      state.loading = true;
    },
    fetchUsersSuccess: (state, action: PayloadAction<Array<User>>) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state) => {
      state.users = [];
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
export const { setUsers, fetchUsers, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
export const selectUsers = (state: RootState) => state.user.users;
