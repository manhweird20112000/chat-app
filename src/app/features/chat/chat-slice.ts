import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ChatServices } from 'app/services';
import {
  ListParamsMessages,
  SendMessage,
} from 'app/services/chat/dto/chat.interface';
import httpStatus from 'http-status';

interface UserSelected {
  fullname: string;
  avatar: string;
  roomId: string;
  color: string;
}

interface ChatState {
  messages: any;
  status: 'idle' | 'loading' | 'failed';
  chatSelected: UserSelected | any;
}

const initialState: ChatState = {
  messages: [],
  status: 'idle',
  chatSelected: {},
};

export const listAsync = createAsyncThunk(
  'message/list',
  async (params: ListParamsMessages, thunkAPI) => {
    try {
      const response = await ChatServices.list(params);

      if (response.data.statusCode === httpStatus.OK) {
        return response.data.data.reverse();
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const sendAsync = createAsyncThunk(
  'message/send',
  async (payload: SendMessage, thunkAPI) => {
    try {
      const response = await ChatServices.send(payload);

      if (response.data.data instanceof Object) {
        return response.data.data;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
// export const deleteAsync = createAsyncThunk(
//   'message/delete',
//   async (thunkAPI) => { }
// );

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectedChat: (state, action) => {
      state.chatSelected = action.payload;
    },
    appendMessage: (state, action) => {
      const exist = state.messages.filter(
        (object: any) => object._id === action.payload._id
      );
      if (exist.length <= 0) {
        state.messages = [...state.messages, action.payload];
      }
    },
    removeMessage: (state, action) => {
      const messages = state.messages.filter(
        (object: any) => object._id !== action.payload.id
      );
      state.messages = [...messages];
    },
    updateIdMessage: (state, action) => {
      const messages = state.messages.map((object: any) =>
        object._id === action.payload.id
          ? { ...object, _id: action.payload._id }
          : { ...object }
      );
      state.messages = [...messages];
    },
  },
  extraReducers: (buidler) => {
    buidler
      .addCase(listAsync.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.status = 'idle';
      })
      .addCase(listAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(listAsync.pending, (state, action) => {
        state.status = 'loading';
      });
  },
});

export const { selectedChat, appendMessage, removeMessage, updateIdMessage } =
  chatSlice.actions;

export default chatSlice.reducer;
