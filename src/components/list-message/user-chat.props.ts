export interface UserChatProps {
  onPress?(): void,
  ownerId: string,
  lastedMessage: string,
  lastedUserId: string,
  fullName: string,
  avatar: string,
  lastMessageStatus: string,
  username: string
}