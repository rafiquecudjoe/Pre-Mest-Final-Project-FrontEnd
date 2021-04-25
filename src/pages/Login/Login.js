import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import pic3 from "./img/avatar.svg";
import pic4 from "./img/authen.svg";
import Mycss from "./login.module.css";
import Button from "../../components/appcomponents/button";
import InputField from "../../components/appcomponents/InputField";

function Login() {
  
  const [values, setValues] = useState({});

  let history = useHistory();

  function updateValues(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    console.log(values)

    let json_object = JSON.stringify(values);

    history.push("/dashboard");

    fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      body: json_object,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {});
  }

  return (
    <>
      <div className={Mycss.container}>
        <img className={Mycss.wave} src={pic4}></img>
        <div className={Mycss.img}></div>
        <div className={Mycss.login_content}>
          <form className={Mycss.form_control}>
            <img src={pic3} />
            <h2 className={Mycss.title}>Welcome</h2>

            {/* Username section */}
            <div className={Mycss.input_div}>
              <div className={Mycss.divdiv}>
                <InputField
                  placeholder="Username"
                  type="text"
                  className={Mycss.input}
                  onChange={updateValues}
                  name="username"
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

            <a href="#">Forgot Password?</a>
            <a href="/signup">Dont Have an Account, Sign Up?</a>

            <Button
              style={{
                width: "30%",
                height: "50px",
              }}
              className="btn"
              onClick={submit}
              // onClick={() => gotoPage("/Signup")}
              text="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
