import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ImageLight from "../asset/images/forgot-password-office.jpeg";
import ImageDark from "../asset/images/forgot-password-office-dark.jpeg";
import { Label, Input, Button } from "@windmill/react-ui";
import Alerts from "../components/appcomponents/Alert";

function ForgotPassword() {
  const [values, setValues] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [alert, setAlert] = useState(false);
  const history = useHistory();

  const updateValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(values);

    fetch("http://localhost:5000/api/v1/requestResetPassword", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setAlert(true);
        } else {
          setErrormessage(response.error);
        }
      });
  };

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
              {alert ? (
                <Alerts
                  text="Confirmation Email Sent Successfully,Open you Email to set new Password"
                  className="text-center text-black font-bold "
                  type="success"
                  onClose={() => setAlert(false)}
                />
              ) : (
                <></>
              )}
              {errormessage && <div>{errormessage} </div>}
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Forgot password
              </h1>

              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  placeholder="Jane Doe"
                  name="email"
                  onChange={updateValues}
                />
              </Label>

              <Button tag={Link} block className="mt-4" onClick={submit}>
                Recover password
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
