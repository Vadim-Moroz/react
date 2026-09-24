import {useContext} from "react";
import {MyContext} from "../../MyContext/MyContext.tsx";

const RightBranchB = () => {
    const {change} = useContext(MyContext)
    return (
        <div>
            <p>RightBranchB</p>
            <button onClick={()=>{
                change('black','white')
            }}>change theme</button>
        </div>
    );
};

export default RightBranchB;