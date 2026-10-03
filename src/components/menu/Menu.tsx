import {Link} from "react-router-dom";

// містить навігаційне меню сайту та дозволяє користувачу
// переходити між доступними сторінками за допомогою навігаційних посилань.
const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/auth/resources'>Resources</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;