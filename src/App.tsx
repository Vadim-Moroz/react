import './App.css'
import LeftBranch from "./components/LeftBranch/LeftBranch.tsx";
import RightBranch from "./components/RightBranch/RightBranch.tsx";
import {init, MyContext} from "./MyContext/MyContext.tsx";
import {useState} from "react";


function App() {
  const [current, setTheme] = useState(init.theme)
    const change = ()=>{
        setTheme(prev=>
            prev.bgcolor === 'white'
                ? { bgcolor: 'black', color: 'white' }
                : { bgcolor: 'white', color: 'black' }

        )
    }
  return (
    <div style={{backgroundColor:current.bgcolor,color:current.color}}>
      <MyContext.Provider value={{theme:current}}>
          <button onClick={change}>
              Змінити тему
          </button>
        <LeftBranch/>
        <RightBranch/>
    </MyContext.Provider>
    </div>
  )
}

export default App
