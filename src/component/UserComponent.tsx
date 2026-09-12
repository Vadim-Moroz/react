import type {FC} from "react";
import type {IUsers} from "../model/IUsers.ts";
type PropsType={
    item:IUsers
}
const UserComponent:FC<PropsType> = ({item}) => {
    return (
        <div>
            <p>{item.first_name}</p>
            <p>{item.last_name}</p>
            <p>{item.email}</p>
            <img src={item.avatar} alt={item.last_name}/>
        </div>
    );
};

export default UserComponent;