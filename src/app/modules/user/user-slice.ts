import { createSlice } from "@reduxjs/toolkit"

interface UserState {
  id: number,
  fullname: string,
  avatar: string,
  token: string,
}

const initialState: UserState = {
  id: 10,
  fullname: "Đinh Mạnh",
  avatar: 'https://i.pinimg.com/564x/aa/e3/91/aae39130ea0941683983b51a33f689b8.jpg',
  token: 'ok'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
})


export const { } = userSlice.actions

export default userSlice.reducer
