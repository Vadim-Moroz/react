// Отримує дані з певної комірки в LocalStorage
// Тип отримує від зазначеного типу в запиті
export const retriveLocalStorage = <T,>(key: string) => {
    // Отримує значення за вказаним ключем із LocalStorage.
    // Якщо запис відсутній, getItem() повертає null і записується порожній рядок
    const object= localStorage.getItem(key)||'';
    // Перевіряє чи значення порожнє
    if(!object){
        // Повертає порожній об'єкт приведений до типу T
        return {} as T
    }
    // Перетворює об'єкт з JSON вигляду та записує в зміну parse
    const parse= JSON.parse(object);
    // повертає об'єкт приведений до типу T
    return parse as T
}