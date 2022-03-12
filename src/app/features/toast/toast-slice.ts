import { createSlice } from "@reduxjs/toolkit";

interface ToastState {
  hide: boolean,
  type: 'success' | 'process' | 'danger' | 'warning',
  content: string,
  title: string
}

const initialState: ToastState = {
  hide: false,
  type: 'success',
  content: 'Thông báo',
  title: 'Thông báo'
}

export const toastSlice = createSlice({
  initialState,
  name: 'toast',
  reducers: {
    setError: (state, action) => {
      state.hide = true
      state.title = action.payload.title
      state.type = action.payload.type
      state.content = action.payload.content
    },
    setProcess: (state) => {
      state.hide = true
      state.type = 'process'
    },
    setClose: (state) => {
      state.hide = false
    },
  }
})

export default toastSlice.reducer

export const { setError, setProcess, setClose } = toastSlice.actions