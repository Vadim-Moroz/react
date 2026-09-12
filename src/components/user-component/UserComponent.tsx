import {FC} from 'react';
import {IUsersDummy} from "../../models/user-models/IUsersDummy.tsx";
import { useNavigate} from "react-router-dom";


type UserTypeProp = {
    item:IUsersDummy;
};
const UserComponent:FC<UserTypeProp> = ({item}) => {
        const navigation = useNavigate();
        const onButtonClick = () => {
                navigation( '/carts/'+item.id)
        }

        return (
        <div>
                <div><h1>{item.id}</h1>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.username}</p>
                        <button onClick={onButtonClick}>Open cart</button>
                </div>
        </div>
    );
};

export default UserComponent;
