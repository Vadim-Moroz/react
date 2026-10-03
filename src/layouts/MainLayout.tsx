import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            {/* Відображає меню сайту*/}
            <Menu/>
            {/*Виводить дочірні маршрути*/}
            <Outlet/>
        </div>
    );
};

export default MainLayout;