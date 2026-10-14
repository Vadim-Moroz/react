// Базова URL-адреса API, яка використовується для формування адрес запитів
const baseUrl= 'https://jsonplaceholder.typicode.com'
// Отримує кінцевий endpoint та тип даних T які буде отримано в результаті виконання fetch-запиту
export const getAll = async <T,>(endpoint:string)=> {
        // Отримує дані з запиту та перетворює отриману JSON-відповідь у JavaScript-значення
    const response = await fetch(`${baseUrl}${endpoint}`).then(res=>res.json())
       // Повертає дані приводячи них до типу T
    return response as T
    }