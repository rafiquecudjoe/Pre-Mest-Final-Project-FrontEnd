import SendNowcss from "./SendNow.module.css";
import sendnow from "../../sendnow.svg";
import InputField from "../../components/appcomponents/InputField";
import Button from "../../components/appcomponents/button";
import { Link } from "react-router-dom";

const SendNow = () => {
  return (
    <div className={SendNowcss.main}>
      <div className={SendNowcss.form}>
        <div className={SendNowcss.uppertext}>
          <p
            style={{
              fontSize: "35px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Sign up to send and save instantly.
          </p>
          <p>Save money, save time, take control of your deliveries.</p>
        </div>
        <div className={SendNowcss.content}>
          <h3>Name</h3>
          <InputField />
          <h3>Email</h3>
          <InputField />
          <h3>Password</h3>
          <InputField />
          <Button className={SendNowcss.btn} text="Get my free account" />
        </div>
        <div className={SendNowcss.lowertext}>
          <p>By signing up you agree to our terms and conditions.</p>

          <p style={{ textAlign: "start" }}>
            Already have an account? Login here
          </p>
        </div>
      </div>
      <div className={SendNowcss.image}>
        <img src={sendnow} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default SendNow;
