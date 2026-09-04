
import './App.css'
import {CommentComponents} from "./components/comments-component/CommentComponents.tsx";


const App=()=> {

  return (
    <>
      <div>
        <ul>
            {<CommentComponents/>}
        </ul>
      </div>
    </>
  )
}

export default App
