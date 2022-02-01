import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/user/user-slice';
import chatReducer from './modules/chat/chat-slice';

const rootStore = {
	reducer: {
		user: userReducer,
		chat: chatReducer,
	},
};

export const store = configureStore(rootStore);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
