export interface AvatarProps {
  size: number,
  title?: string,
  uri: string,
  isOnline?: string,
  onlineSize?: number,
  onPress?(): void
}