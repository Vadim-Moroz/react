import "./CharacterComponent.css"
import {FC, ReactNode} from "react";
import {ISimpsos} from "../../model/SimpsonModel.ts";
type PropsType={
    simpson:ISimpsos
    children: ReactNode
}
export const CharacterComponent:FC<PropsType> = ({simpson,children}) => {
    return (
        <li className='my-10 border-4'>
            <h3 className='text-2xl'>{simpson.name} {simpson.surname}</h3>
            <p>{simpson.age}</p>
            <p>{children}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </li>
    );
};
