import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from './modules/auth/auth-slice';
import userReducer from './modules/user/user-slice';
import chatReducer from './modules/chat/chat-slice';

const rootStore = {
	reducer: {
		auth: authReducer,
		user: userReducer,
		chat: chatReducer,
	},
};

export const store = configureStore(rootStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
