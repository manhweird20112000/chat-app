export interface SigupDTO {
  firstName: string,
  lastName: string,
  gender: 'MALE' | 'FEMALE' | any,
  password: string,
  email: string,
  birthday: string
}

export interface SigninDTO {
  email: string,
  password: string
}