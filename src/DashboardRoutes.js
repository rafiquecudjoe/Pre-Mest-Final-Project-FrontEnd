
import { Switch, Route } from "react-router-dom"
import Sending from "./pages/Dashboard/sending/Sending"
import Receiving from "./pages/Dashboard/Receiving/Receiving"
import Tracking from "./pages/Dashboard/Tracking/Tracking"
import Neworder from "./pages/Neworder/Neworder"
import Help from "./pages/Dashboard/Help/Help"
import Payment from "./pages/payment/Payment"
import CheckoutMM from "./pages/checkout/CheckoutMM"



const DashboardRoutes = () =>{
    return(
        <div>
             <Switch>
     
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
     
      <Route exact path="/dashboard/sending" component={Sending} />
      <Route exact path="/dashboard/receiving" component={Receiving} />
       <Route excat path="/dashboard/tracking" component={Tracking}/>
      <Route exact path="/tracking" component={Tracking} />
      {/* <Route exact path="/loader" component={SunspotLoaderComponent} /> */}
      <Route exact path="/dashboard/neworder" component={Neworder} />
                {/* <Route exact path="/404" component={Express404}/> */}
      <Route exact path="/dashboard/help" component={Help} />
      <Route exact path="/dashboard/payment" component={Payment} />
    <Route exact path="/dashboard/checkout" component={CheckoutMM}/>
    </Switch>

        </div>
    )
}


export default DashboardRoutes