import { createSlice } from '@reduxjs/toolkit';
interface ChatState {
  id: number,
  fullname: string,
  avatar: string,

}

const initialState: ChatState = {
  id: 0,
  fullname: '',
  avatar: ''
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectUser: (state: ChatState, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { selectUser } = chatSlice.actions
export default chatSlice.reducer