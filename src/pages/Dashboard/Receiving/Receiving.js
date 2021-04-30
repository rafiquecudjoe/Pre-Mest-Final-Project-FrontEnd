import Dashboardcss from "../Dashboard.module.css"
import Button from "../../../components/appcomponents/button"
import urban from "../../../urban1.png"

const Receiving = () => {
  return (
    <div className={Dashboardcss.main}>
      <div className={Dashboardcss.inputtext2}>
        <div className={Dashboardcss.text2}>
          <div className={Dashboardcss.text5}>
            <div className={Dashboardcss.welcom}>
              <h2>Welcome to Express Delivery!</h2>
            </div>
            
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
              className={Dashboardcss.btn}
              style={{
                width: "30%",
                height: "50px",
                border: "none",
              }}
              text="Send Parcel"
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
