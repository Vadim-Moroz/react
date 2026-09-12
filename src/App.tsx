import './App.css'
import PaginationComponent from "./component/pagination/PaginationComponent.tsx";
import UsersComponent from "./component/UsersComponent.tsx";

const App=()=> {
  return (
    <>
      <PaginationComponent/>
      <UsersComponent/>
      <PaginationComponent/>
    </>
  )
}

export default App
