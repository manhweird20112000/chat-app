import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  user: any
}

export const fetchAsyncUsers = createAsyncThunk(
  'user/fetchAsyncUsers',
  async (params: any, thunkAPI) => {
    try {
      const response = await UserServices.fetchUser(params);
      if (response.data.data !== null) {
        return response.data.data
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
);

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: '',
  user: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsyncUsers.fulfilled, (state, actions: PayloadAction<any>) => {
        state.status = 'idle';
        state.users = actions.payload;
      }).addCase(fetchAsyncUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setUser } = userSlice.actions

export default userSlice.reducer