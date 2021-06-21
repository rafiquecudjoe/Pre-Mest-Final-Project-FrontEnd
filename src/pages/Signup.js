import React from "react";
import { Link, useHistory } from "react-router-dom";
import { GithubIcon, TwitterIcon } from "../icons";
import { Input, Label, Button } from "@windmill/react-ui";
import ImageLight from "../asset/images/newsignup2.svg";
import ImageDark from "../asset/images/newsignup2.svg";
import { useState } from "react";
import Alerts from "../components/appcomponents/Alert";
import LoaderComp from "../components/appcomponents/LoaderComp";

function Signup() {
  const history = useHistory();
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const updateValues = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (values.password === values.cpassword) {
      setLoading(true);
      fetch("http://localhost:5000/api/v1/signup", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.success == true) {
            setLoading(false);
            setAlert(true);
            history.push("/login");
            
          } else {
            if (response.success == false) {
              setLoading(false)
              


              
            }
            
          }
           
          },
          (err) => console.log(err)
        );
    } else {
      setLoading(false);
    }
  };

  return (
    <div>
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
                    text="Signup Successful"
                    className="text-center text-black font-bold "
                    type="success"
                    onClose={() => setAlert(false)}
                  />
                ) : (
                  <></>
                )}
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Create account
                </h1>
                <Label>
                  <span>Email</span>
                  <Input
                    className="mt-1"
                    type="email"
                    placeholder="john@doe.com"
                    name="email"
                    onChange={updateValues}
                  />
                </Label>
                <Label>
                  <span>Fullname</span>
                  <Input
                    className="mt-1"
                    type="text"
                    placeholder="John Doe"
                    name="fullname"
                    onChange={updateValues}
                  />
                </Label>

                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    className="mt-1"
                    placeholder="***************"
                    type="password"
                    name="password"
                    onChange={updateValues}
                  />
                </Label>

                <Label className="mt-4">
                  <span>Confirm password</span>
                  <Input
                    className="mt-1"
                    placeholder="***************"
                    type="password"
                    name="cpassword"
                    onChange={updateValues}
                  />
                </Label>

                <Label className="mt-6" check>
                  <Input type="checkbox" />
                  <span className="ml-2">
                    I agree to the{" "}
                    <span className="underline">privacy policy</span>
                  </span>
                </Label>

                <Button onClick={submit} block className="mt-4">
                  Create account
                </Button>
                {loading ? (
                  <LoaderComp
                    className="mx-48 my-2 md:mx-36"
                    type="Circles"
                    color="grey"
                    height="30"
                    width="30"
                    timeout="500000"
                  />
                ) : (
                  <></>
                )}

                <hr className="my-8" />

                <Button block layout="outline">
                  <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Github
                </Button>
                <Button block className="mt-4" layout="outline">
                  <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Twitter
                </Button>

                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-green-400 dark:text-green-400 hover:underline"
                    to="/login"
                  >
                    Already have an account? Login
                  </Link>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
