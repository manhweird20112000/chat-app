import AxiosRequest from '../AxiosRequest';
import {
	API_DELETE_MESSAGE,
	API_GET_MESSAGES,
	API_SEND_MESSAGE,
} from './constants';
import { ListParamsMessages, SendMessage } from './dto/chat.interface';

export class ChatServices {
	static list(params?: ListParamsMessages) {
		return AxiosRequest.get(API_GET_MESSAGES, {
			params: params,
		});
	}

	static send(payload: SendMessage) {
		return AxiosRequest.post(API_SEND_MESSAGE, payload);
	}

	static delete(idMessage: string) {
		return AxiosRequest.delete(API_DELETE_MESSAGE, {
			data: {
				id: idMessage,
			},
		});
	}
}
