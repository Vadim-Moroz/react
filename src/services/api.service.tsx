const baseUrl= 'https://jsonplaceholder.typicode.com'
// Отримує кінцевий endpoint та тип даних T які буде отримано в резулльтаті виконання fetch-запиту
export const getAll = async <T,>(endpoint:string)=> {
        // Отримує дані з запиту nf перетворює отриману JSON-відповідь у JavaScript-значення
    const response = await fetch(`${baseUrl}${endpoint}`).then(res=>res.json())
       // Повертає дані приводячи них до типу T
    return response as T
    }