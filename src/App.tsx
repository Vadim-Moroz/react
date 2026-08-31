
import './App.css'
import {coursesTitleArray} from "./Courses/MyCourses.ts";

const App=()=> {

  return (
    <>
      <div>
        <ul>
          {coursesTitleArray.map((value,index)=><ul>{index},{value}</ul>)}
        </ul>
      </div>
    </>
  )
}

export default App
