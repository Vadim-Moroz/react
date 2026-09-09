import {FC} from 'react';
import type {IUsers} from "../../models/user-models/IUsers.tsx";

type UserTypeProp = {
    item:IUsers;
};
const UserComponent:FC<UserTypeProp> = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.address.street}</p>
            <p>{item.address.suite}</p>
            <p>{item.address.city}</p>
            <p>{item.address.zipcode}</p>
            <p>{item.address.geo.lng}</p>
            <p>{item.address.geo.lat}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.company.name}</p>
            <p>{item.company.catchPhrase}</p>
            <p>{item.company.bs}</p>

        </div>
    );
};

export default UserComponent;
