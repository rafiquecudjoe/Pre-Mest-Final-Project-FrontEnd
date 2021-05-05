import Dashboardcss from "../Dashboard.module.css";
import Button from "../../../components/appcomponents/button";
import urban from "../../../urban1.png";

const Receiving = () => {
  return (
    <div className={Dashboardcss.main}>
      <div className={Dashboardcss.inputtext2}>
        <div className={Dashboardcss.text2}>
          <div className={Dashboardcss.text5}>
            <div className={Dashboardcss.welcom}>
              <h2>Receiving a parcel?</h2>
            </div>

            <p className={Dashboardcss.this}>
              When someone sends a parcel and uses your email address it'll show
              up here. <br />
            </p>
            <p className={Dashboardcss.we}>
              Not seeing your order? <br />
              Check that you have verified your email 
              address. Your email address may not have been used on the order
            </p>
          </div>
          <div className={Dashboardcss.buttons}>
            <Button
              className={Dashboardcss.btn}
              style={{
                width: "30%",
                height: "50px",
                border: "none",
              }}
              text="Receive Parcel"
            />
            <Button
              style={{
                width: "30%",
                height: "50px",

                border: "none",
              }}
              text="Get quote"
            />
          </div>
        </div>
        <div className={Dashboardcss.img2}>
          <img src={urban} alt="urban" height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Receiving;
