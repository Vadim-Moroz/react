import type {FC} from "react";
import type {IComment} from "../../models/IComments.tsx";

// Тип пропсів компонента CommentComponent
// Властивість comment містить об'єкт типу IComment
type CommentsPropsType = {
    comment: IComment
}

// Компонент CommentComponent відображає інформацію про один коментар
// За допомогою FC<CommentsPropsType> вказуємо тип компонента та описуємо пропси, які він приймає
const CommentComponent:FC<CommentsPropsType> = ({comment}) => {
    return (
        // Контейнер, у якому відображається інформація про коментар
        <div>
            {/* Виводимо електронну пошту автора коментаря */}
            {comment.email}
        </div>
    );
};

// Експортуємо компонент, щоб його можна було використовувати в інших файлах
export default CommentComponent;