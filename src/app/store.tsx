import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/user/user-slice';

const rootStore = {
	reducer: {
		user: userReducer,
	},
};

export const store = configureStore(rootStore);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
