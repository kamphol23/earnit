import React from "react";
import LandingPage from "./laningPage/LandingPage";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import About from "./aboutPage/About";
import LogIn from "./logInPage/LogIn";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/About" component={About} />
          <Route path="/LogIn" component={LogIn} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
