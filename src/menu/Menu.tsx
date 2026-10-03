import {Link} from "react-router-dom";

// містить навігаційне меню сайту та дозволяє користувачу
// переходити між доступними сторінками за допомогою навігаційних посилань.
const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
                <li><Link to={'complex'}>complex</Link></li>
            </ul>
        </div>
    );
};

export default Menu;