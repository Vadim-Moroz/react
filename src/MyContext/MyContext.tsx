import {createContext} from "react";

type MyContextType = {
    theme: {
        bgcolor: string
        color: string
    }
}
export const init= {theme: {bgcolor:'white',color:'black'}};
export const MyContext = createContext<MyContextType>(init)

