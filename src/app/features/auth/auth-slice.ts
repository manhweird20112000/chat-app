import { SigninDTO, SigupDTO } from 'app/services/auth/dto/auth.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from 'app/services';
import _ from 'lodash';
import { setClose, setError, setProcess } from '../toast/toast-slice';

export interface AuthState {
	status: 'idle' | 'loading' | 'failed';
	isSignin: boolean;
}

const initialState: AuthState = {
	isSignin: false,
	status: 'idle',
};

export const signupAsync = createAsyncThunk(
	'auth/signup',
	async (payload: SigupDTO, thunkAPI) => {
		try {

			const response = await AuthService.signup(payload);
			if (
				response.data.data instanceof Object &&
				!_.isNull(response.data.data)
			) {

				return response.data.data;
			}
		} catch (error) {
			thunkAPI.rejectWithValue(error)
		}
	}
);

export const signinAsync = createAsyncThunk(
	'auth/signin',
	async (payload: SigninDTO, thunkAPI) => {
		try {
			const response = await AuthService.signin(payload);
			if (
				response.data.data instanceof Object &&
				!_.isNull(response.data.data)
			) {

				return response.data.data;
			}
		} catch (error) {
			thunkAPI.rejectWithValue(error)
		}
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},

});

export default authSlice.reducer;
