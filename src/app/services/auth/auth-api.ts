
import AxiosRequest from '../AxiosRequest';
import { API_AUTH_LOGIN, API_AUTH_REGISTER } from './constants';

export async function login(payload: any) {
  return new Promise((resolve, reject) => {
    AxiosRequest.post(API_AUTH_LOGIN, payload)
      .then((res) => resolve(res.data.data))
      .catch((error) => reject(error));
  });
}

export async function register(payload: any) {
  return new Promise((resolve, reject) => {
    AxiosRequest.post(API_AUTH_REGISTER, payload)
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((error) => resolve(error))
  });
}
