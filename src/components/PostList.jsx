import PostItem from "./PostItem";

function PostList({dishes}) {  
   
  return (
    <ul className="dishes__list">
    {dishes.map(dish=>
      <PostItem dish={dish} key={dish.id} />
    )}
    </ul>
  );
}

export default PostList;
