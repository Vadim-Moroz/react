import {Outlet, useNavigate} from "react-router-dom";
import PaginationComponent from "../component/pagination-component/PaginationComponent.tsx";
import {useEffect} from "react";


const PaginationLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("products");
    }, [navigate]);
    return (
        <>
            <PaginationComponent/>
            <Outlet/>
        </>
    );
};

export default PaginationLayout;