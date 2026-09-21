import {useEffect, useState} from "react";
import {IUsersDummy} from "../../models/user-models/IUsersDummy.tsx";
import {generalService} from "../../service/api.service.tsx";
import {UsersDummyModel} from "../../models/user-models/UsersDummy.ts";
import {urls} from "../../constants/urls.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUsersDummy[]>([])
    useEffect( ()=>{
        generalService.getDataDummy <UsersDummyModel & { users: IUsersDummy[]}>(urls.users.AllUsersDummy).then((AllUsers)=>setUsers(AllUsers.users))
    },[]);
    return (
        <div>
            <div>{users.map(user => <UserComponent key={user.id} item={user}/>)}</div>
        </div>
    );
};

export default UsersComponent;