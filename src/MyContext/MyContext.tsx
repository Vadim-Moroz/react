import {createContext} from "react";

type MyContextType = {
    theme: {
        bgcolor: string
        color: string
    }
    change(bgcolor:string,color:string):void
}
export const init= {theme: {bgcolor:'white',color:'black'},change:(bgcolor:string,color:string)=>{}};
export const MyContext = createContext<MyContextType>(init)

