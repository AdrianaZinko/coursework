function PostItem(props) {  
  return ( 
    <li className="dishes__item">
                <img src={props.dish.photo} className="dishes__img" alt="" />
                <div className="dishes__content">
                  <span className="dishes__type">{props.dish.type}</span>
                  <p className="dishes__caption">
                    <a href={`/dishes/${props.dish.id}`}>{props.dish.name}</a>
                  </p>
                  <p className="dishes__ingredients">
                     {props.dish.ingredients}
                  </p>
                </div>
              </li> 
    
  );
}

export default PostItem;
