import {Link, Outlet} from "react-router-dom";

const CommentsComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>Info jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Info dummyjson</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default CommentsComponent;