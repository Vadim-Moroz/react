import './App.css'
import LeftBranch from "./components/LeftBranch/LeftBranch.tsx";
import RightBranch from "./components/RightBranch/RightBranch.tsx";
import {init, MyContext} from "./MyContext/MyContext.tsx";
import {useState} from "react";

function App() {
  const [current, setTheme] = useState(init.theme)
  return (
    <body style={{backgroundColor:current.bgcolor,color:current.color}}>
      <MyContext.Provider value={{
          theme: current,
          change:(bgcolor,color)=>{
            setTheme({bgcolor, color})
      }
        }}>
        <LeftBranch/>
        <RightBranch/>
    </MyContext.Provider>
    </body>
  )
}

export default App
