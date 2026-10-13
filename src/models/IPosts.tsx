// Описує структуру одного поста
export interface IPost {
  userId: number; // Ідентифікатор користувача, який створив пост
  id: number; // Ідентифікатор поста
  title: string; // Заголовок поста
  body: string; // Вміст поста
}