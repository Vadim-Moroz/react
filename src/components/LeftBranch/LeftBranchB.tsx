import {useContext} from "react";
import {MyContext} from "../../MyContext/MyContext.tsx";

const LeftBranchB = () => {
    const {change} = useContext(MyContext)
    return (
        <div>
            <p>LeftBranchB</p>
                <button onClick={()=>{
                    change('white','black')
                }}>change theme</button>
            </div>
    );
};

export default LeftBranchB;