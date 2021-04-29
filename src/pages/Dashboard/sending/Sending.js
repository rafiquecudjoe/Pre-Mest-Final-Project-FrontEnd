import Sendingcss from "./Sending.module.css"
import logo3 from "../../Banner/img/expresslogo2.png";
import InputField from "../../../components/appcomponents/InputField";
import urban from "../../../urban.png";
import Button from "../../../components/appcomponents/button";
import sending from "../img/package.png";
import Receiving from "../img/package.svg";
import dashboard from "../img/dashboard.svg";
import Billing from "../img/credit-card.svg";
import Settings from "../img/settings.svg";
import Help from "../img/help.svg";
import Tracking from "../img/tracking.png";




const Sending = () => {
  return (
    <div className={Sendingcss.main}>
      <div className={Sendingcss.uppertext}>
        <div className={Sendingcss.img}>
          <img src={logo3} alt="logo" height="100%" width="100%" />
        </div>
        <div className={Sendingcss.search}>
          <InputField
            style={{
              height: "40px",
              width: "430px",
              border: "none",
            }}
            placeholder="Seach orders,contacts or history"
          />
        </div>
        <div className={Sendingcss.account}>
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
      <div className={Sendingcss.maintext}>
        <div className={Sendingcss.leftmenu}>
          <ul>
            <li>
              <a href="/">
                <img src={dashboard} alt="dash"  height="30px" width="30px" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="/">
                <img src={sending} alt="send"  height="30px" width="30px" />
                Sending
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Receiving} alt="receive" height="30px" width="30px" />
                Receiving
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Tracking} alt="track" height="30px" width="30px" />
                Tracking
              </a>
            </li>

            <hr></hr>
            <li>
              <a href="/">
                <img src={Settings} alt="settings"  height="30px" width="30px" />
                Settings
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Billing} alt="billing" height="30px" width="30px" />
                Billing
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Help} alt="help" height="30px" width="30px" />
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className={Sendingcss.inputcontainer}>
          <div className={Sendingcss.inputtext1}>
            <textarea
              style={{ height: "50px", width: "300px", resize: "none" }}
            >
              Hello Welcome to Express Delivery
            </textarea>
          </div>
          <div className={Sendingcss.inputtext2}>
            <div className={Sendingcss.text2}>
              <div className={Sendingcss.text5}>
                <p className={Sendingcss.welcom}>
                  <h2>Welcome to Express Delivery!</h2>
                </p>
                <p className={Sendingcss.this}>
                  This is your Sending where you can book parcels, print
                  delivery <br />
                  labels and track everything you send.
                </p>
                <p className={Sendingcss.we}>
                  We also have loads of great information in our Help Centre to
                  get <br />
                  you started
                </p>
              </div>
              <div className={Sendingcss.buttons}>
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
            <div className={Sendingcss.img2}>
              <img src={urban} alt="urban" height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Sending;
