import {useEffect, useState} from "react";
import {userService} from "../../service/api.service.tsx";
import type {IUsers} from "../../models/user-models/IUsers.tsx";
import UserComponent from "./UserComponent.tsx";
import UserDummyComponent from "./UserDummyComponent.tsx";
import {IUsersDummy} from "../../models/user-models/IUsersDummy.tsx";

export const InfoUsersJson = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect( ()=>{
        userService.getUsersJson().then((AllUsers)=>setUsers(AllUsers))
    },[]);
    return (
        <div>
            {users.map(user=> <UserComponent key={user.id} item={user}/> )}
        </div>
    );
};

export const InfoUsersDummy = () => {
    const [users, setUsers] = useState<IUsersDummy[]>([])
    useEffect( ()=>{
        userService.getUsersDummy().then((AllUsers)=>setUsers(AllUsers))
    },[]);
    return (
        <div>
            {users.map(user=> <UserDummyComponent key={user.id} item={user}/> )}
        </div>
    );
};
