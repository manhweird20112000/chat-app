import TokenService from 'utils/token-service';
import AxiosRequest from '../AxiosRequest'
import { API_GET_USERS } from './constants';
export class UserServices {
  private token: string

  constructor() {
    this.token = TokenService.getLocalAccessToken('user')
  }

  async fetchUser(params: any) {
    return AxiosRequest.get(API_GET_USERS, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      }
      , params: params
    })
  }
}