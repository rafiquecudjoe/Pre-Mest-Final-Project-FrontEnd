import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Banner from "./pages/Banner/Banner";
import Arrays from "./Arrays";
import Sending from "./pages/Dashboard/sending/Sending";
import Footer from "./Footer/Footer";
import Navbar from "./components/appcomponents/Navbar";
import Reviews from "./Reviews/Reviews";
import LandingPage from "./LandingPage";
import Features from "./Features/Features";
import FAQ from "./F.A.Q/FAQ";
import "./App.css";
import Receiving from "./pages/Dashboard/Receiving/Receiving";
import Tracking from "./pages/Dashboard/Tracking/Tracking";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/features" component={Features} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/banner" component={Banner} />
      <Route exact path="/nav" component={Navbar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/reviews" component={Reviews} />
      <Route exact path="/footer" component={Footer} />
      <Route exact path="/arrays" component={Arrays} />
      <Route exact path="/dashboard/sending" component={Sending} />
      <Route exact path="/receiving" component={Receiving} />
      <Route exact path="/tracking" component={Tracking} />
    </Switch>
  );
};

export default AppRouter;
