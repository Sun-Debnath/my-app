import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from "./components/Review/Review";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Notfound from "./components/Notfound/Notfound";
import ProductDetail from "./components/ProductDetail/ProductDetail";


function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>

          <Route path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          {/* <Link to="/review">
            <Review></Review>
          </Link> */}

          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

          <Route exact path="/">
            <Shop></Shop>
          </Route>   

          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
