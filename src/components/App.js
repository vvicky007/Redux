import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from './courses/ManageCoursePage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
  
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose = {3000} hideProgressBar  />
    </div>
  );
}

export default App;
