import axios from 'axios';
import TokenService from 'utils/token-service';
import { API_AUTH_LOGIN, API_AUTH_REFRESHTOKEN } from './auth/constants';

const REQUEST_TIMEOUT = 18000;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: REQUEST_TIMEOUT,
});

instance.interceptors.request.use(
  (config: any) => {
    const token = TokenService.getLocalAccessToken('user');
    if (token) {
      config.headers['x-access-token'] = token
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const originalConfig = error.config;
    if (originalConfig.url === API_AUTH_LOGIN && error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
      }
      try {
        const response = await instance.post(API_AUTH_REFRESHTOKEN, {
          refreshToken: TokenService.getLocalRefeshToken('user'),
        });

        const { accessToken } = response.data;

        TokenService.updateLocalAccessToken('user', accessToken);

        return instance(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
