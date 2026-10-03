import UserComponent from "./UserComponent.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../../slices/usersSlice/UserSlice.tsx";

const UsersComponent = () => {
    // Отримує стан userSlice з Redux та деструктуризує його на масив користувачів і стан їх завантаження
    const {users} = useAppSelector(({userSlice}) => userSlice)
    // Отримує функцію dispatch для відправлення actions
    const dispatch = useAppDispatch();
    useEffect(() => {
        // Відправляє асинхронний action для отримання користувачів з API та збереження отриманих даних у store
        dispatch(userSliceActions.loadUsers());
    },[])
    return (
        <div>
            {users.map(user=><UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;