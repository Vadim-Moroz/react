import UserComponent from "./UserComponent.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../../slices/usersSlice/UserSlice.tsx";

// Компонент UsersComponent отримує користувачів з Redux Store та відображає їх на сторінці
const UsersComponent = () => {
    // Отримує стан userSlice з Redux та деструктуризує його на масив користувачів і стан їх завантаження
    const {users,loadState} = useAppSelector(({userSlice}) => userSlice)
    // Отримує функцію dispatch для відправлення actions
    const dispatch = useAppDispatch();
    // useEffect виконується після монтування компонента
    useEffect(() => {
        // Відправляє асинхронний action для отримання користувачів з API та збереження отриманих даних у store
        dispatch(userSliceActions.loadUsers());
    },[dispatch])
    // Повертаємо JSX-розмітку компонента
    return (
        // Контейнер для відображення списку користувачів
        <div>
            {/* Якщо користувачі ще завантажуються, відображаємо повідомлення Loading. */}
            {!loadState&&<div>Loading</div>}
            {/* За допомогою map перебираємо масив користувачів і для кожного елемента створюємо UserComponent */}
            {users.map(user=><UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

// Експортуємо компонент для використання в інших частинах застосунку
export default UsersComponent;