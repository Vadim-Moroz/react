
// Описує географічні координати адреси користувача.
interface Geo {
  lat: string; // Географічна широта
  lng: string; // Географічна довгота
}

// Описує адресу користувача
interface Address {
  street: string; // Назва вулиці
  suite: string; // Номер квартири
  city: string; // Назва міста
  zipcode: string; // Поштовий індекс
  geo: Geo; // Географічні координати адреси
}

// Описує інформацію про компанію
export type Company = {
  name: string; // Назва компанії
  catchPhrase: string; // Слоган компанії
  bs: string;   // Короткий опис напряму діяльності компанії
};

// Описує структуру одного користувача.
export interface IUser {
  id: number;  // Ідентифікатор користувача
  name: string; // Ім'я користувача
  username: string; // Ім'я користувача для ідентифікації в системі
  email: string; // Електронна пошта користувача
  address: Address; // Адреса користувача
  phone: string; // Контактний номер телефону
  website: string; // Вебсайт користувача
  company: Company; // Інформація про компанію користувача
}