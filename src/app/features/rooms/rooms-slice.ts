import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomsServices } from 'app/services';
import { createRoomDTO } from 'app/services/rooms/dto/rooms.interface';

interface Rooms { }

interface RoomsState {
  rooms: any;
  status: 'idle' | 'loading' | 'failed';
  limit: number;
  skip: number;
}

const initialState: RoomsState = {
  rooms: [],
  status: 'idle',
  limit: 20,
  skip: 0,
};

export const roomsAsync = createAsyncThunk('rooms/list', async () => {
  try {
    const response = await RoomsServices.get();
    if (response.data.data instanceof Object) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const createRoomAsync = createAsyncThunk(
  'rooms/create',
  async (payload: createRoomDTO, thunkAPI) => {
    try {
      const response = await RoomsServices.create(payload);
      if (response.data.data instanceof Object) {
        return response.data.data;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteRoomAsync = createAsyncThunk(
  'rooms/delete',
  async (idRoom: string, thunkAPI) => {
    try {
      const response = await RoomsServices.remove(idRoom);
      if (response.data.data instanceof Object) {
        return response.data.data;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(roomsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(roomsAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(roomsAsync.fulfilled, (state, action) => {
        state.rooms = action.payload;
        state.status = 'idle';
      })
      .addCase(createRoomAsync.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(createRoomAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createRoomAsync.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(deleteRoomAsync.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(deleteRoomAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteRoomAsync.fulfilled, (state, action) => {
        state.status = 'idle';
      });
  },
});

export const { setSkip } = roomsSlice.actions;

export default roomsSlice.reducer;
