import { Switch, Route } from "react-router-dom";
import Banner from "./pages/LandingPage/Banner/Banner";
// import Navbar from "./components/appcomponents/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Features from "./pages/LandingPage/Features/Features";
import FAQ from "./pages/LandingPage/F.A.Q/FAQ";
import "./App.css";
import Express404 from "./pages/404/Express404";
import Header from "./pages/Dashboard/Header";
import { lazy } from "react";
import Layout from "./pages/Dashboard/Layout";
import Navbar from "./pages/LandingPage/Navbar";


const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const PasswordReset = lazy(()=> import('./pages/PasswordReset'))

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/features" component={Features} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/banner" component={Banner} />
      {/* <Route exact path="/nav" component={Navbar} /> */}
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/signup" component={Signup} />
      <Route exact path='/forgot' component={ForgotPassword} />
      <Route exact path="/passreset" component={PasswordReset}/>
      <Route exact path="/404" component={Express404} />
      {/* <Route exact path="/dashboard/payment" component={Dashboard} />
      <Route exact path="/dashboard/checkout" component={Dashboard} /> */}
      <Route exaxt path="/header" component={Header} />
      <Route path="/dashboard" component={Layout} />
      <Route exact path='/navbar' component={Navbar}/>
    </Switch>
  );
};

export default AppRouter;
