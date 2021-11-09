import { getPagesArray } from "../../../utils/pages";

  

function Pagination({totalPages,page,changePage}) { 
  let pagesArray=getPagesArray(totalPages)
  
    return (
      <div className="dishes__btns"> 
     {pagesArray.map(p=>
      <button onClick={()=>changePage(p)} key={p} className={page===p?'dishes__btn dishes__btn--current':'dishes__btn'}>{p}</button>
    )}

      </div>
    );
  }
  
  export default Pagination;
  