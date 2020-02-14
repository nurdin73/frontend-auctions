import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
// import Filter from "./Pages/Filter";
import Detail from "./Pages/Detail";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Lelang from "./Pages/Lelang";
import Register from "./Pages/Register";
import Auction from "./Pages/Auction";
import Login from "./Pages/Login";
import AddAuction from "./Pages/AddAuction";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/add-auction">
          <AddAuction />
        </Route>
        <Route path="/event/:id/auctions">
          <Auction />
        </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/lelang">
            <Lelang />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

function Logout() {
  localStorage.clear("token")
  return <Redirect to={{pathname: `/`}} />
}