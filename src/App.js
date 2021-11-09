import { BrowserRouter,Route ,Redirect,Switch} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from './components/UI/Footer/Footer' 
import Dishes from "./pages/Dishes";
import Info from "./pages/Info";
import PostIdPage from "./pages/PostIdPage";
import './styles/style.css';
import './styles/normalize.css';

function App() {
  
  return (
    <div className="wrapper">
       <BrowserRouter>
        <Navbar/>
       <main className="main">
         <div className="container">
         <Switch>
       <Route exact path="/" component={Dishes} />
         <Route path="/info" component={Info} />
         <Route exact path="/dishes/:id" component={PostIdPage} /> 

         <Redirect to="info"/>
       </Switch>
         </div>
       </main>
       </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;
