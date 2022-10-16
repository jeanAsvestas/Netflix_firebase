import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null as null | UserInterface },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice;

interface UserInterface {
  id: string;
  email: string;
}
