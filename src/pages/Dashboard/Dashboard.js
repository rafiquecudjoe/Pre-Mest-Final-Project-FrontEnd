import Dashboardcss from "./Dashboard.module.css";
import logo3 from "../Banner/img/expresslogo2.png";
import InputField from "../../components/appcomponents/InputField";
import Sending from "./img/package.png";
import Receiving from "./img/package.svg";
import dashboard from "./img/dashboard.svg";
import Billing from "./img/credit-card.svg";
import Settings from "./img/settings.svg";
import Help from "./img/help.svg";
import Tracking from "./img/tracking.png";
import DashboardRoutes from "../../DashboardRoutes";
import { Link } from "react-router-dom";

function Dashboard() {
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
            placeholder="Search orders,contacts or history"
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
              Hello New User
            </option>

            <option>
              {" "}
              <Link to="/">
                <p>Logout</p>{" "}
              </Link>
            </option>
          </select>
        </div>
      </div>
      <div className={Dashboardcss.maintext}>
        <div className={Dashboardcss.leftmenu}>
          <ul>
            <li style={{ listStyle: "none" }}>
              <Link to="/dashboarddefault">
                <img src={dashboard} alt="dash" height="30px" width="30px" />
                Dashboard
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/dashboard/sending">
                <img src={Sending} alt="send" height="30px" width="30px" />
                Sending
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/dashboard/receiving">
                <img src={Receiving} alt="send" height="30px" width="30px" />
                Receiving
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/dashboard/tracking">
                <img src={Tracking} alt="send" height="30px" width="30px" />
                Tracking
              </Link>
            </li>

            <hr></hr>
            <li style={{ listStyle: "none" }}>
              <Link to="/dashboarddefault">
                <img src={Settings} alt="settings" height="30px" width="30px" />
                Settings
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/dashboarddefault">
                <img src={Billing} alt="billing" height="30px" width="30px" />
                Billing
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/dashboard/help">
                <img src={Help} alt="help" height="30px" width="30px" />
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className={Dashboardcss.inputcontainer}>
          <div className={Dashboardcss.inputtext1}>
            <textarea
              style={{ height: "50px", width: "300px", resize: "none" }}
              defaultValue="Hello Welcome to Express Delivery"
            ></textarea>
          </div>

          <DashboardRoutes />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
