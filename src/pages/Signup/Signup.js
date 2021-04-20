import  { useState } from "react";
import Mycss1 from "../Signup/Signup.module.css";
import Button from "../../components/appcomponents/button";
import InputField from "../../components/appcomponents/InputField";
import pic1 from "./img/login-green2.svg";
import pic3 from "../Login/img/avatar.svg";

function Signup() {
  const [values, setvalues] = useState({});

  const updatevalues = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  function signup(e) {
    e.preventDefault();
    console.log(values);

    fetch("http://localhost:5000/api/v1/signup", {
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
        },
        (err) => console.log(err)
      );
  }

  return (
    <>
      <img className={Mycss1.wave} src={pic1} />
      <div className={Mycss1.container}>
        <div className={Mycss1.img} />
        <div className={Mycss1.login_content}>
          <form className={Mycss1.form_control}>
            <img src={pic3} />
            <h2 className={Mycss1.title}>Welcome</h2>

            {/* Fullname section */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.divdiv}>
                <InputField
                  placeholder="Name"
                  type="text"
                  className={Mycss1.input}
                  onChange={updatevalues}
                  name="fullname"
                />
              </div>
            </div>

            {/* Email Section */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.div}>
                <InputField
                  placeholder="Email"
                  type="email"
                  className={Mycss1.input}
                  onChange={updatevalues}
                  name="email"
                />
              </div>
            </div>
            {/* Username Session */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.div}>
                <InputField
                  placeholder="Username"
                  type="text"
                  className={Mycss1.input}
                  onChange={updatevalues}
                  name="username"
                />
              </div>
            </div>
            {/* Password Session */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.div}>
                <InputField
                  placeholder="Password"
                  type="password"
                  className={Mycss1.input}
                  onChange={updatevalues}
                  name="password"
                />
              </div>
            </div>
            {/* Confirm Password Session */}
            <div className={Mycss1.input_div}>
              <div className={Mycss1.div}>
                <InputField
                  placeholder="Confirm Password"
                  type="password"
                  className={Mycss1.input}
                  onChange={updatevalues}
                  name="cpassword"
                />
              </div>
            </div>

            <a href="#">Forgot Password?</a>
            <a href="/login">Already have an Account? Login</a>

            <Button className="" onClick={signup} text="Signup" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
