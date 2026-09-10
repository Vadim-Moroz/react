import {useEffect, useState} from "react";
import {generalService} from "../../service/api.service.tsx";
import type {IUsers} from "../../models/user-models/IUsers.tsx";
import UserComponent from "./UserComponent.tsx";
import UserDummyComponent from "./UserDummyComponent.tsx";
import {IUsersDummy} from "../../models/user-models/IUsersDummy.tsx";
import {UsersDummyModel} from "../../models/user-models/UsersDummy.ts";
import {urls} from "../../constants/urls.ts";

export const InfoUsersJson = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect( ()=>{
        generalService.getDataJson <IUsers[]>(urls.users.AllUsersJson).then((AllUsers)=>setUsers(AllUsers))
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
        generalService.getDataDummy <UsersDummyModel & { users: IUsersDummy[]}>(urls.users.AllUsersDummy).then((AllUsers)=>setUsers(AllUsers.users))
    },[]);
    return (
        <div>
            {users.map(user=> <UserDummyComponent key={user.id} item={user}/> )}
        </div>
    );
};
