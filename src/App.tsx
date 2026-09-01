
import './App.css'
import {CoursesComponent} from "./components/courses-component/CoursesComponent.tsx";


const App=()=> {

  return (
    <>
      <div>
        <ul>
            {<CoursesComponent/>}
        </ul>
      </div>
    </>
  )
}

export default App
