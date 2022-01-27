import { configureStore } from '@reduxjs/toolkit';

const rootStore = {
	reducer: {},
};

export const store = configureStore(rootStore);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
