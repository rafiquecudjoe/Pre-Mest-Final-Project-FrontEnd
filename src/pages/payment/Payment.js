import React from "react";
import Paymentcss from "./Payment.module.css";
import { Form, Button } from "react-bootstrap";
import image from "./payment.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Payment(props) {
  const [values, setValue] = useState("");

  const updateValue = (e) => setValue(e.target.value);

  const history = useHistory();

  const gotopage = (e) => {
    e.preventDefault();
    console.log(values);
    let calcCost = props.location.state.formCost;

    if (values === "Pay with Mobile Money") {
      history.push({
        pathname: "/dashboard/checkout",
        state: {
          formCost: calcCost,
        },
      });
    } else {
      alert("Mobile Money Option ONLY Supported for now. Thank You");
    }
  };

  return (
    <div className={Paymentcss.main}>
      <div className={Paymentcss.orderdetails}>
        <div className={Paymentcss.text}>
          <h3 style={{ marginBottom: "20px" }}>Order Details</h3>
          <p style={{ marginBottom: "50px" }}>
            Delivery from {props.location.state.formCityTo} to{" "}
            {props.location.state.formCityFrom}
            <h4>Amount to pay : GHc {props.location.state.formCost}</h4>
          </p>
          <Form.Label>How will you make Payment</Form.Label>
          <Form.Control
            onChange={updateValue}
            name="paymentopt"
            style={{ width: "60%" }}
            as="select"
            defaultValue="Choose..."
          >
            <option>Choose...</option>
            <option>Pay with Mobile Money</option>
            <option>Pay with Cash</option>
          </Form.Control>
          <Button onClick={gotopage}>Make Payment</Button>
        </div>
        <div className={Paymentcss.image}>
          <img src={image} alt={image} height="100%" width="100%" />
        </div>
      </div>
      <div className={Paymentcss.options}>
        <div className={Paymentcss.new1}></div>
        <div className={Paymentcss.new}></div>
      </div>
    </div>
  );
}

export default Payment;
