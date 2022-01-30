import { createSlice } from "@reduxjs/toolkit"

interface UserState {
  id: number,
  fullname: string
}

const initialState: UserState = {
  id: 0,
  fullname: "Đinh Mạnh"
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
})


export const { } = userSlice.actions

export default userSlice.reducer
