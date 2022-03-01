import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomsServices } from 'app/services';
import TokenService from 'utils/token-service';

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

export const rooms = createAsyncThunk('rooms/list', async () => {
  try {
    const response = await RoomsServices.get(
      TokenService.getLocalAccessToken('user')
    );
    if (response.data.data instanceof Object) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
});

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
      .addCase(rooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(rooms.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(rooms.fulfilled, (state, action) => {
        state.rooms = action.payload;
        state.status = 'idle';
      });
  },
});

export const { setSkip } = roomsSlice.actions

export default roomsSlice.reducer