
import './App.css'
import {PostComponents} from "./components/posts-component/PostComponents.tsx";


const App=()=> {

  return (
    <>
      <div>
        <ul>
            {<PostComponents/>}
        </ul>
      </div>
    </>
  )
}

export default App
