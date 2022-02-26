import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserServices } from 'app/services/users/users-api';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  gender: 'MALE' | 'FEMALE';
  status: 'ACTIVE' | 'INACTIVE';
}

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'failed';
  error: string;
}

export const fetchAsyncUsers = createAsyncThunk(
  'user/fetchAsyncUsers',
  async (params) => {
    const api = new UserServices()
    const response = await api.fetchUser(params);
    console.log(response)
    return response.data
  }
);

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsyncUsers.fulfilled, (state, actions: any) => {
        state.status = 'idle';
        state.users = actions.payload;
      }).addCase(fetchAsyncUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
