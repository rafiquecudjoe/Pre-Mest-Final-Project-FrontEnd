import Button from "../../../components/appcomponents/button";
import InputField from "../../../components/appcomponents/InputField";
import Trackingcss from "./Tracking.module.css";


const Tracking = () => {
  return (
      <div className={Trackingcss.main}>
          
      <div className={Trackingcss.content}>
              <h1>Track your parcel </h1>
        <p>Enter your six-character alpha-numeric reference <br/>
        number to get an update</p>
              <em className={Trackingcss.text}>Your Express Delivery reference number</em>
              <InputField
            style={{
              height: "40px",
              width: "430px",
              border: "none",
            }}
            placeholder="E.g. GHT5RG"
              />
               <Button className={Trackingcss.btn}
                  style={{
                    width: "40%",
                    height: "50px",
                    border: "none",
                  }}
                  text="Track My Parcel"
                />
          </div>
          </div>
  );
};

export default Tracking;
