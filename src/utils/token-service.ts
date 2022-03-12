function getLocalRefeshToken(key: string): string {
  const data: any = localStorage.getItem(key)
  const user = data
    ? JSON.parse(data)
    : {};
  return user?.refreshToken;
}

function getLocalAccessToken(key: string): string {
  const data: any = localStorage.getItem(key)
  const user = data
    ? JSON.parse(data)
    : {};
  return user?.accessToken;
}

function updateLocalAccessToken(key: string, token: string): void {
  const data: any = localStorage.getItem(key)
  const user = data
    ? JSON.parse(data)
    : {};
  user.accessToken = token;
  localStorage.setItem(key, JSON.stringify(user));
}

function getUser(key: string): any {
  const data: any = localStorage.getItem(key);
  return JSON.parse(data);
}

function setUser(user: any, key: string): void {
  localStorage.setItem(key, JSON.stringify(user));
}

function removeLocal(key: string): void {
  localStorage.removeItem(key);
}

function updateProperties(key: string, payload: any): void {
  const data: any = localStorage.getItem('user');

  const user = data ? JSON.parse(data) : {}
  user[key] = payload;
  localStorage.setItem('user', JSON.stringify(user))

}

const TokenService = {
  getLocalRefeshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeLocal,
  updateProperties
};

export default TokenService;
