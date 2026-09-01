import "./CourseComponent.css"
import {FC} from "react";
import {ICourses} from "../../model/CourseModel.ts";
type PropsType={
    course:ICourses
}
export const CourseComponent:FC<PropsType> = ({course}) => {
    return (
        <div>
            <div className='head'>
                <h3>{course.title}</h3>
                <p>{course.monthDuration},{course.hourDuration}</p>
            </div>
            <ul>
                {
                    course.modules.map((value) => {
                        return <li>{value}</li>
                    })
                }
            </ul>
        </div>
    );
};
