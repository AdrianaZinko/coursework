import {Route,Link,NavLink} from 'react-router-dom' 
import logo from "../../../images/food-svgrepo-com.svg"
function Navbar() {
  return (
    <header className="header">
        <div className="container">
          <div className="header__body">
            
            <Link to="/"><img
                className="header__logo"
                src={logo}
                alt=""
            /></Link>
            <nav className="header__menu">
              <ul className="header__list">
                <li className="header__item">
                <NavLink exact activeClassName='header__link--current' className="header__link" to="/">Рецепти</NavLink> 
                </li>
                <li className="header__item">
                <NavLink activeClassName='header__link--current' className="header__link" to="/info">Інформація</NavLink>  
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header> 
  );
}

export default Navbar;
