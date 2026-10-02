import type {FC} from "react";
import type {IUser} from "../../models/IUsers.tsx";

type UserPropsType = {
    item:IUser;
}
const UserComponent:FC<UserPropsType> = ({item}) => {
    return (
        <div>
            {item.id}
        </div>
    );
};

export default UserComponent;