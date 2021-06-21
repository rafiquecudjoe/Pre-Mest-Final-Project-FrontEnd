import Dashboardcss from "../Dashboard.module.css";
import urban from "../../../urban1.png";
import { useHistory } from "react-router-dom";
import { Button } from "@windmill/react-ui";

const Sending = () => {
  const history = useHistory();

  const gotopage = () => {
    history.push("neworder");
  };
  return (
    <div className={Dashboardcss.main}>
      <div className={Dashboardcss.inputtext2}>
        <div className={Dashboardcss.text2}>
          <div className={Dashboardcss.text5}>
            <div className={Dashboardcss.welcom}>
              <h2>Welcome to Express Delivery!</h2>
            </div>

            <p className={Dashboardcss.this}>
              This is your dashboard where you can book parcels, print delivery{" "}
              <br />
              labels and track everything you send.
            </p>
            <p className={Dashboardcss.we}>
              We also have loads of great information in our Help Centre to get{" "}
              <br />
              you started
            </p>
          </div>
          <div className={Dashboardcss.buttons}>
            <Button onClick={gotopage}>Send Parcel</Button>

            <Button className="mx-6" layout="outline">Get quote</Button>
          </div>
        </div>
        <div className={Dashboardcss.img2}>
          <img src={urban} alt="urban" height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Sending;
