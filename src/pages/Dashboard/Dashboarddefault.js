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
import { Link } from "react-router-dom"

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
            <option selected hidden>
              Rafique Adam
            </option>
            <option>Logout</option>
          </select>
        </div>
      </div>
      <div className={Dashboardcss.maintext}>
        <div className={Dashboardcss.leftmenu}>
          <ul>
            <li>
              <a href="/dashboard">
                <img src={dashboard} height="30px" width="30px" />
                Dashboard
              </a>
            </li>
            <li>
            <Link to="/dashboard/sending">
                <img src={Sending} alt="send" height="30px" width="30px" />
                Sending
              </Link>
            </li>
            <li>
            <Link to="/dashboard/receiving">
                <img src={Receiving} alt="send" height="30px" width="30px" />
                Sending
              </Link>
            </li>
            <li>
              <a href="#">
                <img src={Tracking} height="30px" width="30px" />
                Tracking
              </a>
            </li>

            <hr></hr>
            <li>
              <a href="#">
                <img src={Settings} height="30px" width="30px" />
                Settings
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Billing} height="30px" width="30px" />
                Billing
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Help} height="30px" width="30px" />
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className={Dashboardcss.inputcontainer}>
          <div className={Dashboardcss.inputtext1}>
            <textarea
              style={{ height: "50px", width: "300px", resize: "none" }}
            >
              Hello Welcome to Express Delivery
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
              <img src={urban} height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
