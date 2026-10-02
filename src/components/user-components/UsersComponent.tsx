import UserComponent from "./UserComponent.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../../slices/usersSlice/UserSlice.tsx";

const UsersComponent = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice) // Достає потрібні дані в потрібний атрибут
    const dispatch = useAppDispatch(); // Типізує dispatch
    useEffect(() => {
        dispatch(userSliceActions.loadUsers()); // Отримує користувачів
    },[])
    return (
        <div>
            {users.map(user=><UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;