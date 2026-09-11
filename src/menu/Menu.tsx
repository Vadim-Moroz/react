import "./Menu.css"
import {Link, Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>Users</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Menu;