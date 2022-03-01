import AxiosRequest from '../AxiosRequest'
import { API_GET_USERS } from './constants';
export class UserServices {
  static fetchUser(params: any) {
    return AxiosRequest.get(API_GET_USERS, {
      params: params
    })
  }
}