import type {FC} from "react";
import type {IUser} from "../../models/IUsers.tsx";

// Тип пропсів компонента UserComponent
// Властивість item містить об'єкт типу IUser
type UserPropsType = {
    item:IUser;
}

// Компонент UserComponent відображає інформацію про одиного користувача
// За допомогою FC<UserPropsType> вказуємо тип компонента та описуємо пропси, які він приймає
const UserComponent:FC<UserPropsType> = ({item}) => {
    return (
        // Контейнер, у якому відображається інформація про користувача
        <div>
            {/* Виводимо айді користувача */}
            {item.id}
        </div>
    );
};

// Експортуємо компонент, щоб його можна було використовувати в інших файлах
export default UserComponent;