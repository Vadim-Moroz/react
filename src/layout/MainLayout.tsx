import {Outlet} from "react-router-dom";
import Menu from "../menu/Menu.tsx";

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