import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Channels from "./Channels";
import Categories from "./Categories";
import Mystuff from "./Mystuff";
import Languages from "./Languages";
import Signup from "./Signup";
import Searchbar from "./Searchbar";
import Login from "./Login";








const Routing = () => {
    return(
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/channel" element={<Channels />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/mystuff" element={<Mystuff />} />
        <Route exact path="/languages" element={<Languages/>} />
        <Route exact path="/searchbar" element={<Searchbar />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />


        
      </Routes>

    );
}

export default  Routing;