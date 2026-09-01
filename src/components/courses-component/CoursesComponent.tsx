import "./CoursesComponent.css"
import {coursesArray} from "../../Courses/MyCourses.ts";
import {ICourses} from "../../model/CourseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
export const CoursesComponent = () => {
    return (
        <div className='main'>
            {coursesArray.map((course:ICourses,index:number)=>{
                    return <CourseComponent course={course} key={index}/>
                })
            }
        </div>
    );
};