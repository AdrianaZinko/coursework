import { useEffect, useState } from "react";
import PostService from "../API/PostService"; 
import { useFetching } from "../hooks/useFetching"; 
import Loader from "../components/UI/Loader/Loader";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import PostList from "../components/PostList";
import MySelect from "../components/UI/Select/MySelect";
 
function Dishes() { 
     
  const [dishes, setDishes] = useState([]); 
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1); 
 const [selectedSort,setSelectedSort]=useState('') 
 function getSortedDishes(){
   if(selectedSort && selectedSort==='id'){
     return [...dishes].sort((a,b)=>b[selectedSort].toString().localeCompare(a[selectedSort]))
   } else if(selectedSort){
    return [...dishes].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
   }
   return dishes
 }
 const sortedPost=getSortedDishes()
  useEffect(() => {
    fetchPosts(limit,page);
  }, [ ]);
  const [fetchPosts,isPostsLoading,postError]=useFetching(async(limit,page)=>{
    const response = await PostService.getAll(limit,page); 
    setDishes(response.data);
    
    const totalCount=response.headers['x-total-count'] 
    setCount(totalCount)
    setTotalPages(getPageCount(totalCount,limit));
  })
   const changePage=(page)=>{
     setPage(page) 
     fetchPosts(limit,page)
   }
   const sortPost=(sort)=>{
     setSelectedSort(sort) 
   }
  return (
    <section className="dishes">
      <h1 className="dishes__title">Рецепти</h1>
            <div className="dishes__description">
              <p>Що приготувати?</p>
              <p>
                Над цим питанням щодня замислюються мільйони людей у всьому
                світі.
              </p>
              <p>
                Сподіваюся, рецепти мого кулінарного сайту допоможуть вирішити
                це питання сьогодні.
              </p>
              <p>
                На цьому сайті ви знайдете кулінарні рецепти, святкові та
                повсякденні, з докладними інструкціями
              </p>
            </div>
            <div className="dishes__top">
              <span className="dishes__found">Знайдено {count} рецепта</span>
              <MySelect
        defaultValue="Сортувати"
        value={selectedSort}
        onChange={sortPost}
        options={[
          {value:'name', name: 'По назві'}, 
          {value:'id', name: 'По даті додавання'}
        ]}
        />
            </div>
      
      {postError && <h1>Error Adriana {postError}</h1>}
      {isPostsLoading
      ?  <Loader/>
      :<PostList dishes={sortedPost} />
    } 
    <Pagination page={page} changePage={changePage} totalPages={totalPages} />
             
    </section>
  );
}

export default Dishes;
