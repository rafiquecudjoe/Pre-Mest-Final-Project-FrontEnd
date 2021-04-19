import { useHistory } from "react-router-dom";

function Shoes() {
  let history = useHistory();

  function gotoPage() {
    history.push("/appliances");
  }

  return (
    <div>
      <h1>This is the Shoes Page</h1>
      <p>Items in Cart :</p>
      <button>Add this shoe to cart </button>
      <br />
      <button onClick={gotoPage}>Navigate to Appliances section</button>
    </div>
  );
}

export default Shoes;
