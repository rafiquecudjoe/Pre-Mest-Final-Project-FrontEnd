import React, { useState } from "react";

import pic3 from "./img/avatar.svg";
import pic4 from "./img/authen.svg";
import Mycss from "./login.module.css";
import Button from "../../components/appcomponents/button";
import InputField from "../../components/appcomponents/InputField";

function Login() {
  const [user_name, setUsername] = useState("");
  const [pass_word, setPassword] = useState("");

  function Updateusername(e) {
    setUsername(e.target.value);
    console.log(user_name)
  }

  function Updatepassword(e) {
    setPassword(e.target.value);
  }

  

  function submit(e) {
    e.preventDefault();
    let object = { username: user_name, password: pass_word }
    let json_object = JSON.stringify(object)

    fetch('http://localhost:5000/api/v1/login', {
      method: 'POST',
      body: json_object,
      headers:{"Content-Type": "application/json"}
      
    })
      .then(res =>res.json())
      .then(res => {
      console.log(res)
    })

    
  }

  return (
    <>
      
    
      <img className={Mycss.wave} src={pic4}></img>
      <div className={Mycss.container}>
        
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
                  onChange={Updateusername}
                 
                 
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
                  onChange={Updatepassword}
                />
              </div>
            </div>

            <a href="#">Forgot Password?</a>
            <a href="/signup">Dont Have an Account, Sign Up?</a>

            <Button
              className=""
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
