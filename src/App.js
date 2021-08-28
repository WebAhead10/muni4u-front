import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import Profile from "./pages/Profile/Profile";
import Request from "./pages/Request";
// import Footer from "./Components/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/Profile" component={Profile} /> */}
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Request" component={Request} />

          <Request />
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
