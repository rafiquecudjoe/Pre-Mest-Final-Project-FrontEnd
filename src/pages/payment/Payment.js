import React from "react";
import Paymentcss from "./Payment.module.css";
import { Form, Button } from "react-bootstrap";
import image from "./payment.png";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { SidebarContext } from "../../store/SidebarContext";

function Payment(props) {
  const history = useHistory();
  const { order } = useContext(SidebarContext);
  const { formCityTo, formCityFrom, formCost } = order;

  const [values, setValue] = useState(""); //state variables for input fields

  const updateValue = (e) => setValue(e.target.value);

  //FLUTTERWAVE CONFIGURATIONS
  const config = {
    public_key: "FLWPUBK_TEST-04f55d777feabcd1760bc82b687ecc14-X",
    tx_ref: Date.now(),
    amount: formCost,
    currency: "GHS",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "Express Delivery Payments",
      description: `Payment for Delivery Cost of Ghc ${formCost} from ${formCityFrom} to ${formCityTo} `,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // BUTTON SUBMIT FUNCTION
  const gotopage = (e) => {
    if (values === "Pay with Mobile Money") {
      e.preventDefault();

      handleFlutterPayment({
        callback: (response) => {
          closePaymentModal(); // this will close the modal programmatically
          history.push("checkout");
        },
        onClose: () => {},
      });

      // history.push({
      //   pathname: "/dashboard/checkout",
      //   state: {
      //     formCost: calcCost,
      //   },
      // });
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
            Delivery from {formCityFrom} To {formCityTo}
            <h4>Amount to pay : GHc {formCost}</h4>
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
