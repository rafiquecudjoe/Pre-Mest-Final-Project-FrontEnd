import React from "react";
import { Link, useHistory } from "react-router-dom";
import ImageLight from "../asset/images/newlogin.svg";
import ImageDark from "../asset/images/newlogin.svg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import { useState } from "react";
import Alerts from "../components/appcomponents/Alert";
import LoaderComp from "../components/appcomponents/LoaderComp";

function Login(props) {
  const history = useHistory();
  const [values, setValues] = useState({});
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateValues = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true)
    fetch("https://expressbackend3.herokuapp.com/api/v1/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          if (res.success) {
            setLoading(false)
            history.push("/dashboard/dashdefault");
          } else if (res.failure) {
          } else if (res.goaway) {
            setAlert(true);
            setLoading(false)
          }
        },
        (err) => console.log(err)
      );
  };

  return (
    <div>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl ">
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
                    text="User Does not Exist"
                    className="text-center text-black font-bold "
                    type="danger"
                    onClose={() => setAlert(false)}
                  />
                ) : (
                  <></>
                )}
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
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

                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                    name="password"
                    onChange={updateValues}
                  />
                </Label>

                <Button
                  className="mt-4"
                  block
                  underline="none"
                  onClick={submit}
                >
                  Log in
                </Button>
                { loading ?(<LoaderComp
                  className="mx-48 my-2 md:mx-36"
                  type="Circles"
                  color="grey"
                  height="30"
                  width="30"
                  timeout="500000"
                />) : (<></>)}

                <hr className="my-8" />

                <Button block layout="outline">
                  <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Github
                </Button>
                <Button className="mt-4" block layout="outline">
                  <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Twitter
                </Button>

                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
                    to="/forgot"
                  >
                    Forgot your password?
                  </Link>
                </p>
                <p className="mt-1">
                  <Link
                    className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
                    to="/signup"
                  >
                    Create account
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

export default Login;
