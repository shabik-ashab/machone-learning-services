import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import { useState , useEffect, createContext } from 'react';

// create and export context api 
export const CardContext = createContext('card')

function App() {
  // handleClick function from header that helps with load different data on different copononenst 
  const [card, setCard] = useState('home');
   const handleClick = (name) =>{
    setCard(name)
   }
    
  return (
      <CardContext.Provider value={card}>
          <div className="app">
      <Router>
        <Header handleClick={handleClick}
        ></Header>
        <Switch>
          <Route exact path="/">
            <Home ></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/services"> 
           <Services></Services>
          </Route>
          <Route path="/contact"> 
           <Contact></Contact>
          </Route>
          <Route path="/about"> 
           <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/services">
          <Services
          ></Services>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
      </CardContext.Provider>
  );
}

export default App;
