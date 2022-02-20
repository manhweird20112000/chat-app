import AxiosRequest from '../AxiosRequest'
import { API_GET_ROOMS } from './constanst'

export class RoomsServices {
  static get(token: string, params: any) {
    return AxiosRequest.get(API_GET_ROOMS, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: params
    })
  }
}