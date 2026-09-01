import "./CourseComponent.css"
import {FC} from "react";
import {ICourses} from "../../model/CourseModel.ts";
type PropsType={
    course:ICourses
}
export const CourseComponent:FC<PropsType> = ({course}) => {
    return (
        <li>
            {course.title},{course.monthDuration}
        </li>
    );
};
