import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li >
                    <Link to='/cars'>cars</Link>
                </li>
                <li>
                    <Link to='/cars/create'>create cars</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;