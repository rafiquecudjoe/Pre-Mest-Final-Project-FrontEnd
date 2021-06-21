import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import ImageLight from "../asset/images/forgot-password-office.jpeg";
import ImageDark from "../asset/images/forgot-password-office-dark.jpeg";
import { Label, Input, Button } from "@windmill/react-ui";
import Alert from "../components/appcomponents/Alert"

function PasswordReset() {
  const [values, setValues] = useState("");
  const [errormessage, setErrormessage] = useState("");
  
 
  const history = useHistory()


  const updateValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(values);
    fetch("http://localhost:5000/api/v1/passwordreset", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          history.push('/login')
        } else {
          setErrormessage(response.error);
        }
      }
      );
    }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
          
            {errormessage && <div>{errormessage} </div>}
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Enter your new Password
              </h1>

              <Label>
                <span>Password</span>
                <Input
                  className="mt-1"
                  placeholder="******"
                  name="password"
                  onChange={updateValues}
                />
                          </Label>
                          <Label>
                <span>Confirm Password</span>
                <Input
                  className="mt-2"
                  placeholder="******"
                  name="cpassword"
                  onChange={updateValues}
                />
              </Label>

              <Button
                tag={Link}
                to="/login"
                block
                className="mt-4"
                onClick={submit}
              >
                Recover password
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
