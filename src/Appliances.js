import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./store/Context";

function Appliances() {
  const { updateCartItem, cartItem } = useContext(myContext);

  let history = useHistory();

  function gotoPage() {
    history.push("./shoes");
  }
  function UpdateCart() {
    updateCartItem();
  }

  return (
    <div>
      <p>
        <h1>This is the Appliances Page</h1>
      </p>
      <p>Items in Cart : {cartItem}</p>
      <button onClick={UpdateCart}>Add this appliances to cart </button>
      <br />
      <button onClick={gotoPage}>Navigate to shoes section</button>
    </div>
  );
}

export default Appliances;
