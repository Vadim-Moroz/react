import {useContext} from "react";
import {MyContext} from "../../MyContext/MyContext.tsx";

const RightBranchB = () => {
    const {theme} = useContext(MyContext)
    return (
        <div style={{
            backgroundColor: theme.bgcolor,
            color: theme.color
        }}>
            <h1>RightBranchB</h1>
        </div>
    );
};

export default RightBranchB;