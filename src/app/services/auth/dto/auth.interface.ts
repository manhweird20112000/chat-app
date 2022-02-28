export interface SigupDTO {
  firstName: string,
  lastName: string,
  gender: 'MALE' | 'FEMALE',
  password: string,
  email: string,
  birdthday: string
}

export interface SigninDTO {
  email: string,
  password: string
}