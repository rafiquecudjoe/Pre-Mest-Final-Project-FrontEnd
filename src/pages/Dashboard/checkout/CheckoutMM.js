import React, { useContext } from "react";
import checkoutMmcss from "./Checkout.module.css";
import Button from "react-bootstrap/Button";
import image from "./ordercomplete.svg";
import { useHistory } from "react-router-dom";

import { myContext } from "../../../store/Context";

function CheckoutMM(props) {
  const history = useHistory();
  const { formCost } = useContext(myContext);

  const gotopage = () => history.push("/dashboarddefault");
  const gotohome = () => {
    alert("Logout Successful");
    history.push("/");
  };

  return (
    <div className={checkoutMmcss.main}>
      <div className={checkoutMmcss.Text}>
        <p>
          Please you are required to pay an amount of Ghc{formCost} into the MTN
          Momo Details Below.
        </p>
        <p>Momo Name- RAFIQUE ADAM CUDJOE</p>
        <p>Momo Number- 0544413229</p>
        <p>
          Please keep your Transcation ID so you give to the agent who will pick
          your parcel or the agent at our nearest center. Thank You.
        </p>
        <p>ORDER COMPLETE.</p>
        <div>
          <Button onClick={gotopage}>Back to Dashboard</Button>
          <Button onClick={gotohome}>Logout</Button>
        </div>
      </div>
      <div className={checkoutMmcss.image}>
        <img src={image} alt="image" height="100%" width="100%" />
      </div>
    </div>
  );
}

export default CheckoutMM;
