import AxiosRequest from '../AxiosRequest'
import { API_AUTH_LOGIN, API_AUTH_REFRESHTOKEN, API_AUTH_REGISTER } from './constants'
import { SigninDTO, SigupDTO } from './dto/auth.interface'


export class AuthService {
  static signup(payload: SigupDTO) {
    return AxiosRequest.post(API_AUTH_REGISTER, payload)
  }
  static signin(payload: SigninDTO) {
    return AxiosRequest.post(API_AUTH_LOGIN, payload)
  }
  static refreshToken(payload: any) {
    return AxiosRequest.post(API_AUTH_REFRESHTOKEN, payload)
  }
}