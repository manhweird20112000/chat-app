import AxiosRequest from '../AxiosRequest'
import { API_GET_USERS, API_UPDATE_AVATAR } from './constants';
export class UserServices {
  static fetchUser(params: any) {
    return AxiosRequest.get(API_GET_USERS, {
      params: params
    })
  }
  static updateAvatar(data: any) {
    return AxiosRequest.post(API_UPDATE_AVATAR, data)
  }
}