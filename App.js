import './App.css';

//import cn from "classnames";
import style from './App.css';

import React from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './component/main/Main';
import SignIn from './component/login/SignIn';
import SignInSide from './component/login/SignInSide';
import SignUp from './component/login/SignUp';
import Dashboard from './component/dashboard/Dashboard';
import Checkout from './component/checkout/Checkout';
import Blog from './component/blog/Blog';
import Album from './component/album/Album';
import Pricing from './component/pricing/Pricing';
import StickyFooter from './component/stickyfooter/StickyFooter';
import Pagebase from './component/pagebase/Pagebase';
import Onepirate from './onepirate/Home.js';

function App(props) {
  return (
    <div>
      <Router>
        {/*
        TEST PORTAL
        <ul>
          <li className={cn(style.menu)}>
            <Link to="/">Home</Link>
          </li>

          <li className="menu">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="menu">
            <Link to="/signinside">Sign In Side</Link>
          </li>
          <li className="menu">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="menu">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="menu">
            <Link to="/checkout">Checkout</Link>
          </li>
          <li className="menu">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="menu">
            <Link to="/album">Album</Link>
          </li>
          <li className="menu">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="menu">
            <Link to="/stickyfooter">Sticky Footer</Link>
          </li>
        </ul>
        <br />
        */}
        <Routes>
          <Route exact="true" path="/" element={<Main />}></Route>
          <Route exact="true" path="/signin" element={<SignIn />}></Route>
          <Route
            exact="true"
            path="/signinside"
            element={<SignInSide />}
          ></Route>
          <Route exact="true" path="/signup" element={<SignUp />}></Route>
          <Route exact="true" path="/dashboard" element={<Dashboard />}></Route>
          <Route exact="true" path="/checkout" element={<Checkout />}></Route>
          <Route exact="true" path="/blog" element={<Blog />}></Route>
          <Route exact="true" path="/album" element={<Album />}></Route>
          <Route exact="true" path="/pricing" element={<Pricing />}></Route>
          <Route
            exact="true"
            path="/stickyfooter"
            element={<StickyFooter />}
          ></Route>
          <Route exact="true" path="/pagebase" element={<Pagebase />}></Route>
          <Route
            exact="true"
            path="/stickyfooter"
            element={<StickyFooter />}
          ></Route>
          <Route exact="true" path="/onepirate" element={<Onepirate />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
console.log(style);
/*
class App extends React.Component {
  render() {
    return (
      <div>
        TEST PORTAL
        <Main></Main>
        <SignIn></SignIn>
        
        <SignUp></SignUp>
      </div>
    );
  }
}
export default App;
*/
