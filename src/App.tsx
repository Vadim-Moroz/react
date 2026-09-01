
import './App.css'
import {FamilyComponent} from "./components/family-component/FamilyComponent.tsx";


const App=()=> {

  return (
    <>
      <div>
        <ul>
            {<FamilyComponent/>}
        </ul>
      </div>
    </>
  )
}

export default App
