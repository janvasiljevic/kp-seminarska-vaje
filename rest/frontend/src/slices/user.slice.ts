import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISessionUser } from '../interfaces';

const initialState: ISessionUser = { firstname: '', lastname: '', mail: '', dn: '', role: 'clerk' };

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ISessionUser>) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
