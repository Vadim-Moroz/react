import "./Menu.css"
import {Link, Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
                <li><Link to={'products'}>Products</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Menu;