
import './App.css'
import {TodoComponents} from "./components/family-component/TodoComponents.tsx";


const App=()=> {

  return (
    <>
      <div>
        <ul>
            {<TodoComponents/>}
        </ul>
      </div>
    </>
  )
}

export default App
