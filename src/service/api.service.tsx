export const generalService={
    getDataJson: async <T,>(url:string): Promise<T> => {
        return await fetch(url)
            .then(value => value.json())
    },
    getDataDummy: async <T,>(url:string): Promise<T> => {
         return await fetch(url)
            .then(value => value.json())
    }
}