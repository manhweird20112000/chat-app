import axios from "axios";
import { API_AUTH_LOGIN } from "./constants";

interface LoginPayload {
  email: string,
  password: string
}

export async function login(payload: LoginPayload) {
  return axios.post(process.env.REACT_APP_API_URL + API_AUTH_LOGIN, payload)
}