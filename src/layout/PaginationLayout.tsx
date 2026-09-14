import {Outlet} from "react-router-dom";
import PaginationComponent from "../component/pagination-component/PaginationComponent.tsx";


const PaginationLayout = () => {
    return (
        <>
            <Outlet/>
            <PaginationComponent/>
        </>
    );
};

export default PaginationLayout;