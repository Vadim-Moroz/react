import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query,setQuery]=useSearchParams({pg:'1'})
    return (
        <div>
            <button onClick={()=>{
                const pg = query.get('pg')
                if(pg){
                    let currentPage:number=+pg;
                    currentPage++
                    setQuery({pg:currentPage.toString()})
                }
            }}>next</button>
               <button onClick={()=>{
                   const pg = query.get('pg')
                   if(pg){
                       let currentPage:number=+pg;
                       currentPage--
                       setQuery({pg:currentPage.toString()})
                   }
               }}>prev</button>
        </div>
    );
};

export default PaginationComponent;