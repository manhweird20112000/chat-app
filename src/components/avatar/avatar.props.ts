export interface AvatarProps {
  size: number,
  title?: string,
  uri: string,
  isOnline?: number,
  onlineSize?: number,
  onPress?(): void
}