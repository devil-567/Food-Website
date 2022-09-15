import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Error from './components/Error/Error';
import Home from './components/Homescreen/Home';
import Help from './components/Nevbar/Help';
import MyOrder from './components/Nevbar/MyOrder';
import Menu from './components/Nevbar/Menu';
import Login from './components/Nevbar/Login';
import About from './components/Nevbar/About';
import MainHeader from './components/Header/MainHeader';
import Deals from './components/Footer/Order Now/Deals';
import Pizza from './components/Footer/Order Now/Pizza';
import Drinks from './components/Footer/Order Now/Drinks';
import About1 from './components/Footer/About/About';
import Terms_Conditions from './components/Footer/Our policy/Terms&Conditions';
import Responsible from './components/Footer/Our policy/Responsible';
import Privacy from './components/Footer/Our policy/Privacy';
import Faq from './components/Footer/Our policy/FAQ.js';
import Location from './components/Footer/Location/Location';
import Feedback from './components/Footer/Feedback/Feedback';
import SignUp from './components/Nevbar/SignUp';
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<MainHeader/>}>
            <Route index element={<Home/>}/>
          <Route path="help" element={<Help/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route  path="login" element={<Login/>}></Route>
          <Route path="menu" element={<Menu/>}></Route>
          <Route path="myorder" element={<MyOrder/>}></Route>
          <Route path="*" element={<Error/>}></Route>
          <Route path="/deals" element={<Deals/>}></Route>
          <Route path="/pizza" element={<Pizza/>}></Route>
          <Route path="/drinks" element={<Drinks/>}></Route>
          <Route path="/aboutus" element={<About1/>}></Route>
          <Route path="/terms_conditions" element={<Terms_Conditions/>}></Route>
          <Route path="/responsible_disclosure" element={<Responsible/>}></Route>
          <Route path="/privacy" element={<Privacy/>}></Route>
          <Route path="/faq_help" element={<Faq/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
          <Route path="/feedback" element={<Feedback/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>










        </Route>
          </Routes>
    </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
       
  
      
        

      


