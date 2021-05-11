import Dashboardcss from "./Dashboard.module.css";
import logo3 from "../Banner/img/expresslogo2.png";
import InputField from "../../components/appcomponents/InputField";
import urban from "../../urban1.png";
import Button from "../../components/appcomponents/button";
import Sending from "./img/package.png";
import Receiving from "./img/package.svg";
import dashboard from "./img/dashboard.svg";
import Billing from "./img/credit-card.svg";
import Settings from "./img/settings.svg";
import Help from "./img/help.svg";
import Tracking from "./img/tracking.png";
import { Link,useHistory } from "react-router-dom";

function Dashboard() {

  const history = useHistory()

  const gotopage = () => {
    history.push('/dashboard/neworder')
  }
  
  return (
    <div className={Dashboardcss.main}>
      <div className={Dashboardcss.uppertext}>
        <div className={Dashboardcss.img}>
          <img src={logo3} alt="logo" height="100%" width="100%" />
        </div>
        <div className={Dashboardcss.search}>
          <InputField
            style={{
              height: "40px",
              width: "430px",
              border: "none",
            }}
            placeholder="Seach orders,contacts or history"
          />
        </div>
        <div className={Dashboardcss.account}>
          <select
            style={{
              height: "40px",
              width: "120px",
              border: "none",
              outline: "none",
            }}
          >
            <option defaultValue hidden>
              Rafique Adam
            </option>
            <option>Logout</option>
          </select>
        </div>
      </div>
      <div className={Dashboardcss.maintext}>
        <div className={Dashboardcss.leftmenu}>
          <ul>
            <li style={{listStyle:"none"}}>
              <a href="/dashboarddefault">
                <img
                  src={dashboard}
                  alt="dashimg4"
                  height="30px"
                  width="30px"
                />
                Dashboard
              </a>
            </li>
            <li style={{listStyle:"none"}}>
              <Link to="/dashboard/sending">
                <img src={Sending} alt="send" height="30px" width="30px" />
                Sending
              </Link>
            </li>
            <li style={{listStyle:"none"}}>
              <Link to="/dashboard/receiving">
                <img src={Receiving} alt="send" height="30px" width="30px" />
                Receiving
              </Link>
            </li>

            <li style={{listStyle:"none"}}>
              <Link to="/dashboard/tracking">
                <img src={Tracking} alt="trackingimg1"height="30px" width="30px" />
                Tracking
              </Link>
            </li>

            <hr></hr>
            <li style={{listStyle:"none"}}>
              <Link to="#">
                <img src={Settings} alt="settingsimg2"height="30px" width="30px" />
                Settings
              </Link>
            </li>
            <li style={{listStyle:"none"}}>
              <Link to="#">
                <img src={Billing} alt="billingimg2"height="30px" width="30px" />
                Billing
              </Link>
            </li>
            <li style={{listStyle:"none"}}>
              <Link to="/dashboard/help">
                <img src={Help} alt="Helpimg2" height="30px" width="30px" />
                Help
              </Link>
            </li>
          </ul>
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
                <Button
                  onClick={gotopage}
                  style={{
                    width: "30%",
                    height: "50px",
                    backgroundColor: "#93C3FF",
                    border: "none",
                  }}
                  text="Send Parcel"
                />
                <Button
                  
                 
                  style={{
                    width: "30%",
                    height: "50px",
                    backgroundColor: "#93C3FF",
                    border: "none",
                  }}
                  text="Get quote"
                />
              </div>
            </div>
            <div className={Dashboardcss.img2}>
              <img src={urban} alt="urbanimage"height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
