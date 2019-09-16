import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/courses/CoursesPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";

const App = () => (
  <Router>
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
