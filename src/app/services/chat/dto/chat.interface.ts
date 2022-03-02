export interface ListParamsMessages {
  skip?: number;
  limit?: number;
  roomId: string;
}

export interface SendMessage {
  roomId: string;
  message: string;
}

