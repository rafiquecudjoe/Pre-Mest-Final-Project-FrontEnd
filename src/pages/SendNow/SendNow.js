import SendNowcss from "./SendNow.module.css";
import sendnow from "../../sendnow.svg";
import InputField from "../../components/appcomponents/InputField";
import Button from "../../components/appcomponents/button";
import { useHistory, } from "react-router-dom"
import {useState} from "react"

const SendNow = () => {
  const [values, setvalues] = useState({});

  const updatevalues = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const history = useHistory()
  
  function signup(e) {
    e.preventDefault();

    fetch("https://expressbackend3.herokuapp.com/api/v1/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(
        (responseData) => {
          console.log(responseData);
          alert("Signup Successful");
          history.push("/login");
        },
        (err) => console.log(err)
      );
  }

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
          <InputField type="text" name="fullname" onChange={updatevalues }/>
          <h3>Email</h3>
          <InputField type="text" name="email" onChange={updatevalues }/>
          <h3>Password</h3>
          <InputField type="password" name="password" onChange={updatevalues }/>
          <Button
            onClick={signup}
            className={SendNowcss.btn}
            text="Get my free account"
          />
        </div>
        <div className={SendNowcss.lowertext}>
          <p>By signing up you agree to our terms and conditions.</p>

          <p style={{ textAlign: "start" }}>
            Already have an account? Login here
          </p>
        </div>
      </div>
      <div className={SendNowcss.image}>
        <img src={sendnow} alt="" height="100%" width="100%" />
      </div>
    </div>
  );
};

export default SendNow;
