import "./FamilyComponent.css"
import {simpsons} from "../../Simpson/MySimpsons.ts";
import {ISimpsos} from "../../model/SimpsonModel.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
export const FamilyComponent = () => {
    return (
        <ul>
            {simpsons.map((simpson:ISimpsos,index:number)=>{
                    return <CharacterComponent simpson={simpson} key={index}>
                        {simpson.info}
                    </CharacterComponent>;
                })
            }
        </ul>
    );
};