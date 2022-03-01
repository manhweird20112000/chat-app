import AxiosRequest from '../AxiosRequest'
import { API_CREATE_ROOM, API_DELETE_ROOM, API_GET_ROOMS } from './constanst'
import { createRoomDTO } from './dto/rooms.interface';

export class RoomsServices {
  static get() {
    return AxiosRequest.get(API_GET_ROOMS)
  }
  static create(payload: createRoomDTO) {
    return AxiosRequest.post(API_CREATE_ROOM, payload);
  }
  static remove(idRoom: string) {
    return AxiosRequest.delete(API_DELETE_ROOM + idRoom)
  }
}