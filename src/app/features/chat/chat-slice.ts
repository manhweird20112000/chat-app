import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  status: 'idle',
  chatSelected: {},
};

export const listAsync = createAsyncThunk('message/list', async (thunkAPI) => { });
export const sendAsync = createAsyncThunk('message/send', async (thunkAPI) => { });
export const deleteAsync = createAsyncThunk('message/delete', async (thunkAPI) => {

})

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (buidler) => { },
});
