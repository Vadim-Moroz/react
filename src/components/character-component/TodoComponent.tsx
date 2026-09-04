import "./TodoComponent.css"
import {FC} from "react";
import {ITodo} from "../../model/TodoModel.ts";
type PropsType={
    todo:ITodo
}
export const TodoComponent:FC<PropsType> = ({todo}) => {
    return (
        <li className=' border-4'>
            {todo.userId},{todo.id},{todo.title},{todo.completed.toString()}
        </li>
    );
};
