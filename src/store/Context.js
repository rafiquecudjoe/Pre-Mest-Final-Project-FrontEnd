import { createContext, useState } from "react";

const myContext = createContext();

function MyProvider(props) {
  const [cartItem, setCartItem] = useState(0);

  function updateCartItem() {
    let newitem = cartItem + 1;
    setCartItem(newitem);
  }

  return (
    <myContext.Provider value={{ cartItem, setCartItem, updateCartItem }}>
      {props.children}
    </myContext.Provider>
  );
}

export { myContext, MyProvider };
