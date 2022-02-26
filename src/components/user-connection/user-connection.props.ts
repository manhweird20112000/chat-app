export interface UserConnectionProps {
  userId?: string,
  fullname?: string,
  avatar?: string,
  selectedUser?(): void,
  username?: string
}