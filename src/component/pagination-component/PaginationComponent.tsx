import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query,setQuery]=useSearchParams({pg:'1'})
    let pg:number = Number(query.get('pg')||'1')
    return (
        <div>
            <button onClick={()=>{
                setQuery({pg: (++pg).toString()})
            }}>next</button>
               <button onClick={()=>{
                   if(pg>1){
                       setQuery({pg: (--pg).toString()})
                   }
               }}>prev</button>
        </div>
    );
};

export default PaginationComponent;