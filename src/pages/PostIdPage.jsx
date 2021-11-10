import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService"; 
import { useFetching } from "../hooks/useFetching";

function PostIdPage() {
  const params=useParams()
  const [dish,setDish]=useState({})
  const [fetchPostById]=useFetching(async(id)=>{
      const response= await PostService.getById(id)
      setDish(response.data)
  })
  useEffect(()=>{
    fetchPostById(params.id)
  },[])
    
  return (
    <section className="recipe">
                <h1 className="recipe__title">{dish.name}</h1>
                <img className="recipe__img" src={dish.photo} alt=""/>
                <h2 className="recipe__caption">інгредієнти</h2>
                <ul className="recipe__list">  
                { dish.ingredients?.split(',').map(item=> <li key={item} className="recipe__item">{item}</li>)}

                </ul>
                <h2 className="recipe__caption">Інструкція приготування</h2>
                <p className="recipe__text">{dish.cooking}</p>
            </section>
  );
}

export default PostIdPage;
