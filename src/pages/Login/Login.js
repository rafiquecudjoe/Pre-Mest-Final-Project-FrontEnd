import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import pic3 from "./img/avatar.svg";
import pic4 from "./img/authen.svg";
import Mycss from "./login.module.css";
import Button from "../../components/appcomponents/button";
import InputField from "../../components/appcomponents/InputField";
import SunspotLoaderComponent from "../../SunspotLoaderComponent";

function Login() {
  const [showloader, setshowLoader] = useState(false);
  const [values, setValues] = useState({});

  let history = useHistory();

  function updateValues(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    setshowLoader(true);

    fetch("https://expressbackend.herokuapp.com/api/v1/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          if (res.success) {
            setshowLoader(false);
            history.push("/dashboarddefault");
          } else if (res.failure) {
            // display
            alert("Wrong Username or Password");
            setshowLoader(false);
          } else if (res.goaway) {
            alert("User Doesn't Exist");
            setshowLoader(false);
          }
        },
        (err) => console.log(err)
      );
  }

  return (
    <>
      <div className={Mycss.container}>
        <img className={Mycss.wave} src={pic4} alt="wave"></img>
        <div className={Mycss.img}></div>
        <div className={Mycss.login_content}>
          <form className={Mycss.form_control}>
            <img src={pic3} alt="dash" />
            <h2 className={Mycss.title}>Welcome</h2>

            {/* Username section */}
            <div className={Mycss.input_div}>
              <div className={Mycss.divdiv}>
                <InputField
                  placeholder="Email"
                  type="text"
                  className={Mycss.input}
                  onChange={updateValues}
                  name="email"
                />
              </div>
            </div>

            {/* Password Section */}
            <div className={Mycss.input_div}>
              <div className={Mycss.div}>
                <InputField
                  placeholder="Password"
                  type="password"
                  className={Mycss.input}
                  onChange={updateValues}
                  name="password"
                />
              </div>
            </div>
            <a href="/">Forgot Password?</a>
            <a href="/signup">Dont Have an Account, Sign Up?</a>
            <div className={Mycss.lbtn}>
              <Button
                style={{
                  width: "30%",
                  height: "50px",
                }}
                className={Mycss.btn1}
                onClick={submit}
                text="Login"
              />
            </div>
          </form>
        </div>
        {showloader ? <SunspotLoaderComponent /> : null}
      </div>
    </>
  );
}

export default Login;
