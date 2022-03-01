export interface UserChatProps {
  userId: number,
  avatar: string,
  fullname: string,
  username: string,
  message: string,
  read_status?: string,
  onlineTime?: string,
  lastUser?: number,
  type?: string,
  isOnline?: string,
  onPress?(): void
}