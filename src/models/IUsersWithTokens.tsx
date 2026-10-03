export interface IUsersWithTokens {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
} // Описує структуру об'єкта користувача, який містить дані користувача та токени авторизації користувачів