import type {IPost} from "../../models/IPosts.tsx";
import type {FC} from "react";

// Тип пропсів компонента PostComponent
// Властивість post містить об'єкт типу IPost
type PostsPropsType = {
    post: IPost
}

// Компонент PostComponent відображає інформацію про один пост
// За допомогою FC<PostsPropsType> вказуємо тип компонента та описуємо пропси, які він приймає
const PostComponent:FC<PostsPropsType> = ({post}) => {
    return (
        // Контейнер, у якому відображається інформація про пост
        <div>
            {/* Виводимо айді та заголовок посту */}
            {post.id}{post.title}
        </div>
    );
};

// Експортуємо компонент, щоб його можна було використовувати в інших файлах
export default PostComponent;