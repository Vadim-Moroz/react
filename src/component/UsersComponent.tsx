import {useEffect, useState} from 'react';
import {getUsers} from "../services/api.service.tsx";

import {useSearchParams} from "react-router-dom";
import UserComponent from "./UserComponent.tsx";
import type {IUsers} from "../model/IUsers.ts";

const UsersComponent = () => {
    const [query,setQuery]=useSearchParams()
    const [datas, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        const pg=query.get('pg')
        if(pg){
            getUsers(pg).then((AllData) => setUsers(AllData.data))
        }
    }, [query]);
    return (
        <>
            {datas.map(data => <UserComponent key={data.id} item={data}/>)}
        </>
    )
};

export default UsersComponent;