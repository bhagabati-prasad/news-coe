import React  from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation'
import Category from "./components/Category";
import Allnews from "./components/Allnews";
import Home from "./components/Home";
const App =()=> {
  return (
    <>
      
      <Router>
      <Switch>
      <Route path="/category">
            <Category/>
          </Route>
          <Route path="/all-news">
            <Allnews />
          </Route>
          <Route path="/">
          <Home/>
          </Route>
          
        </Switch>
      
      </Router>
    </>
  );
}

export default App;
