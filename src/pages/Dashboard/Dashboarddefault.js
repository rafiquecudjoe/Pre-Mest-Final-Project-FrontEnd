import Dashboardcss from "./Dashboard.module.css";
import logo3 from "../LandingPage/Banner/img/expresslogo2.png";
import InputField from "../../components/appcomponents/InputField";
import urban from "../../urban1.png";
import { Button } from "@windmill/react-ui";

import { Link,useHistory } from "react-router-dom";

function Dashboard() {

  const history = useHistory()

  const gotopage = () => {
    history.push('/dashboard/neworder')
  }

  const logout = () => {
    alert("Thank You for Enjoying our Service")
    history.push('/')
  }
  
  return (
    <div className={Dashboardcss.main}>
      <div className={Dashboardcss.uppertext}>
        
        <div className={Dashboardcss.search}>
         
        </div>
   
      </div>
      
        <div className={Dashboardcss.inputcontainer}>
          <div className={Dashboardcss.inputtext1}>
            <textarea defaultValue="Hello Welcome to Express Delivery"
              style={{ height: "50px", width: "300px", resize: "none" }}
            >
              
            </textarea>
          </div>
          <div className={Dashboardcss.inputtext2}>
            <div className={Dashboardcss.text2}>
              <div className={Dashboardcss.text5}>
                <p className={Dashboardcss.welcom}>
                  <h2>Welcome to Express Delivery!</h2>
                </p>
                <p className={Dashboardcss.this}>
                  This is your dashboard where you can book parcels, print
                  delivery <br />
                  labels and track everything you send.
                </p>
                <p className={Dashboardcss.we}>
                  We also have loads of great information in our Help Centre to
                  get <br />
                  you started
                </p>
              </div>
            <div className={Dashboardcss.buttons}>
              
              <Button  onClick={gotopage} layout="outline">Send Parcel</Button>
               
                 
                  
                <Button size="regular" className="mx-6 ">Get Quote</Button>
              </div>
            </div>
            <div className={Dashboardcss.img2}>
              <img src={urban} alt="urbanimage"height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Dashboard;
