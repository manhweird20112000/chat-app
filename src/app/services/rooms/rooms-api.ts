import AxiosRequest from '../AxiosRequest'
import { API_CREATE_ROOM, API_GET_ROOMS } from './constanst'

export class RoomsServices {
  static get(token: string) {
    return AxiosRequest.get(API_GET_ROOMS, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }
  // static getLasted(token: string) {
  //   return AxiosRequest.get();
  // }
}