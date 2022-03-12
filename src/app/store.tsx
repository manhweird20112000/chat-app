import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from './features/auth/auth-slice';
import userReducer from './features/user/user-slice';
import chatReducer from './features/chat/chat-slice';
import roomsReducer from './features/rooms/rooms-slice';
import toastReducer from './features/toast/toast-slice';
import createSagaMiddleware from 'redux-saga';

const rootStore = {
	reducer: {
		auth: authReducer,
		user: userReducer,
		chat: chatReducer,
		rooms: roomsReducer,
		toast: toastReducer,
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
