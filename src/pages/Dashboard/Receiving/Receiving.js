import Receivingcss from "./Receiving.module.css";
import logo3 from "../../Banner/img/expresslogo2.png";
import InputField from "../../../components/appcomponents/InputField";
import urban from "../../../urban.png";
import Button from "../../../components/appcomponents/button";
import Rsend from "../img/package.png";
import Rreceive from "../img/package.svg";
import Rdashboard from "../img/dashboard.svg";
import Rbilling from "../img/credit-card.svg";
import Rsettings from "../img/settings.svg";
import Rhelp from "../img/help.svg";
import Rtracking from "../img/tracking.png";

const Receiving = () => {
  return (
    <div className={Receivingcss.main}>
      <div className={Receivingcss.uppertext}>
        <div className={Receivingcss.img}>
          <img src={logo3} alt="logo" height="100%" width="100%" />
        </div>
        <div className={Receivingcss.search}>
          <InputField
            style={{
              height: "40px",
              width: "430px",
              border: "none",
            }}
            placeholder="Seach orders,contacts or history"
          />
        </div>
        <div className={Receivingcss.account}>
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
      <div className={Receivingcss.maintext}>
        <div className={Receivingcss.leftmenu}>
          <ul>
            <li>
              <a href="/">
                <img src={Rdashboard} alt="dash" height="30px" width="30px" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Rsend} alt="send" height="30px" width="30px" />
                Sending
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Rreceive} alt="receive" height="30px" width="30px" />
                Receiving
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src={Rtracking}
                  alt="tracking"
                  height="30px"
                  width="30px"
                />
                Tracking
              </a>
            </li>

            <hr></hr>
            <li>
              <a href="/">
                <img
                  src={Rsettings}
                  alt="settings"
                  height="30px"
                  width="30px"
                />
                Settings
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Rbilling} alt="billing" height="30px" width="30px" />
                Billing
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Rhelp} alt="help" height="30px" width="30px" />
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className={Receivingcss.inputcontainer}>
          <div className={Receivingcss.inputtext1}>
            <textarea
              style={{ height: "50px", width: "300px", resize: "none" }}
            >
              Hello Welcome to Express Delivery
            </textarea>
          </div>
          <div className={Receivingcss.inputtext2}>
            <div className={Receivingcss.text2}>
              <div className={Receivingcss.text5}>
                <p className={Receivingcss.welcom}>
                  <h2>Welcome to Express Delivery!</h2>
                </p>
                <p className={Receivingcss.this}>
                  This is your Receiving where you can book parcels, print
                  delivery <br />
                  labels and track everything you send.
                </p>
                <p className={Receivingcss.we}>
                  We also have loads of great information in our Help Centre to
                  get <br />
                  you started
                </p>
              </div>
              <div className={Receivingcss.buttons}>
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
            <div className={Receivingcss.img2}>
              <img src={urban} alt="urban" height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receiving;
