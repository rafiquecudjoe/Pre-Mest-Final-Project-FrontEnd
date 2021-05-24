import React from "react";
import Paymentcss from "./Payment.module.css";
import { Form, Button } from "react-bootstrap";
import image from "./payment.png"

function Payment(props) {
  console.log(props.location.state.formDetails);

  console.log(props.location.state.formCost);

  return (
    <div className={Paymentcss.main}>
          <div className={Paymentcss.orderdetails}>
              <div className={Paymentcss.text}>
                  <h3 style={{marginBottom:"20px"}}>Order Details</h3>
                  <p style={{marginBottom:"50px"}}>Delivery from {props.location.state.formCityTo } to {props.location.state.formCityFrom }
                  <h4>Amount to pay :  GHc {props.location.state.formCost}</h4>
                      
                  </p>
                  <Form.Label>How will you make Payment</Form.Label>
                  <Form.Control style={{width:"60%"}}name="payment" as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Pay with Mobile Money</option>
            <option>Pay with Cash</option>
          </Form.Control>
          <Button>Make Payment</Button>
                 
              </div>
              <div className={Paymentcss.image}><img src={image} alt={image} height="100%" width="100%"/></div>
      </div>
      <div className={Paymentcss.options}>
        <div className={Paymentcss.new1}>
         
        </div>
        <div className={Paymentcss.new}></div>
      </div>
    </div>
  );
}

export default Payment;
