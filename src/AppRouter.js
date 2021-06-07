import { Switch, Route } from "react-router-dom";
import Banner from "./pages/Banner/Banner";
import Navbar from "./components/appcomponents/Navbar";
import LandingPage from "./LandingPage";
import Features from "./Features/Features";
import FAQ from "./F.A.Q/FAQ";
import "./App.css";
import SunspotLoaderComponent from "./SunspotLoaderComponent";
import Express404 from "./pages/404/Express404";
import Alert from "./components/pagecomponents/Alerts";
import Header from "./pages/Dashboard/Header";
import { lazy } from "react";
import Layout from "./pages/Layout";

const Login = lazy(() => import("./login/Login"));
const Signup = lazy(() => import("./Signup/Signup"));

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/features" component={Features} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/banner" component={Banner} />
      <Route exact path="/nav" component={Navbar} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/loader" component={SunspotLoaderComponent} />
      <Route exact path="/404" component={Express404} />
      <Route exact path="/alert" component={Alert} />
      {/* <Route exact path="/dashboard/payment" component={Dashboard} />
      <Route exact path="/dashboard/checkout" component={Dashboard} /> */}
      <Route exaxt path="/header" component={Header} />
      <Route path="/dashboard" component={Layout} />
    </Switch>
  );
};

export default AppRouter;
