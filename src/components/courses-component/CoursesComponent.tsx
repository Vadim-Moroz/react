import "./CoursesComponent.css"
import {coursesAndDurationArray} from "../../Courses/MyCourses.ts";
import {ICourses} from "../../model/CourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
export const CoursesComponent = () => {
    return (
        <ul>
            {coursesAndDurationArray.map((course:ICourses,index:number)=>{
                    return <CourseComponent course={course} key={index}/>
                })
            }
        </ul>
    );
};