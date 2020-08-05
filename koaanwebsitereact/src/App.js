import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HashRouter as Router,
  ROute,
  Switch,
  HashRouter,
  Route,
} from "react-router-dom";
import { Home } from "./pages/HomePage/Home.js";
import { About } from "./pages/AboutPage/About.js";
import { Contact } from "./pages/ContactPage/Contact.js";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
