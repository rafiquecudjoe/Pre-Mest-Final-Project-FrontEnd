
import { Switch, Route } from "react-router-dom"
import Sending from "./pages/Dashboard/sending/Sending"
import Receiving from "./pages/Dashboard/Receiving/Receiving"
import Tracking from "./pages/Dashboard/Tracking/Tracking"



const DashboardRoutes = () =>{
    return(
        <div>
             <Switch>
     
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
     
      <Route exact path="/dashboard/sending" component={Sending} />
                <Route exact path="/dashboard/receiving" component={Receiving} />
                <Route excat path="/dashboard/tracking" component={Tracking}/>
      {/* <Route exact path="/tracking" component={Tracking} />
      <Route exact path="/loader" component={SunspotLoaderComponent} />
      <Route exact path="/sendnow" component={SendNow} />
      <Route exact path="/404" component={Express404}/> */}
    </Switch>

        </div>
    )
}


export default DashboardRoutes