import UsersComponent from "../components/user-component/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;