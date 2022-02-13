import { register, login } from 'app/services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface AuthState {
  status: 'idle' | 'loading' | 'failed';
  user: any
}

const initialState: AuthState = {
  user: {},
  status: 'idle',
};

export const authRegister = createAsyncThunk(
  'auth/register',
  async (payload: any) => {
    const response = await register(payload);
    return response;
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (payload: any) => {
    const response = await login(payload);
    return response;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload
      }).addCase(authLogin.rejected, (state) => {
        state.status = 'failed'
      });
  },
});

export default authSlice.reducer;
