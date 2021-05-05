import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Banner from "./pages/Banner/Banner";
import Arrays from "./Arrays";
import Footer from "./Footer/Footer";
import Navbar from "./components/appcomponents/Navbar";
import Reviews from "./Reviews/Reviews";
import LandingPage from "./LandingPage";
import Features from "./Features/Features";
import FAQ from "./F.A.Q/FAQ";
import "./App.css";
import SunspotLoaderComponent from "./SunspotLoaderComponent"
import SendNow from "./pages/SendNow/SendNow"
import Express404 from "./pages/404/Express404"
import DashboardDefault from "./pages/Dashboard/Dashboarddefault"
import Neworder from "./pages/Neworder/Neworder"

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
      <Route exact path="/reviews" component={Reviews} />
      <Route exact path="/footer" component={Footer} />
      <Route exact path="/arrays" component={Arrays} />
      <Route exact path="/dashboard/sending" component={Dashboard} />
      <Route exact path="/dashboard/receiving" component={Dashboard} />
      <Route exact path="/dashboard/tracking" component={Dashboard} />
      <Route exact path="/loader" component={SunspotLoaderComponent} />
      <Route exact path="/sendnow" component={SendNow} />
      <Route exact path="/404" component={Express404} />
      <Route exact path="/dashboarddefault" component={DashboardDefault} />
      <Route exact path="/neworder" component={Neworder}/>
    </Switch>
  );
};

export default AppRouter;
