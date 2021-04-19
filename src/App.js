import Login from "./pages/Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Banner from "./pages/Banner/Banner";

import Footer from "./Footer/Footer";

import { MyProvider } from "./store/Context";
import Navbar from "./components/appcomponents/Navbar";
import Reviews from "./Reviews";

function App() {
  return (
    <div>
      <MyProvider>
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route exact path="/nav" component={Navbar} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </MyProvider>
    </div>
  );
}

export default App;
