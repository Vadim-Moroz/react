import "./TodoComponents.css"
import {ITodo} from "../../model/TodoModel.ts";
import {TodoComponent} from "../character-component/TodoComponent.tsx";
import {useEffect, useState} from "react";
import {loadtodos} from "../../service/api.ts";
export const TodoComponents = () => {
    const [todo, setTodo] = useState<ITodo[]>([]);
    useEffect(() => {
        loadtodos().then(value => setTodo(value))

    }, []);

    return (
        <ul>
            {todo.map((todo:ITodo)=>{
                    return <TodoComponent todo={todo} key={todo.id}></TodoComponent>;
                })
            }
        </ul>
    );
};