import {useContext} from "react";
import {MyContext} from "../../MyContext/MyContext.tsx";

const LeftBranchB = () => {
    const {theme} = useContext(MyContext)
    return (
        <div style={{
            backgroundColor: theme.bgcolor,
            color: theme.color
        }}>
            <h1>LeftBranchB</h1>
        </div>
    );
};

export default LeftBranchB;