import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      alert("Please select a size.");
      return;
    }

    const updatedCart = structuredClone(cartItems);

    if (updatedCart[itemId]) {
      updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
    } else {
      updatedCart[itemId] = { [size]: 1 };
    }

    setCartItems(updatedCart);
  };
  const updateQuantity = (itemId, size, quantity) => {
    const updatedCart = structuredClone(cartItems);

    if (!updatedCart[itemId]) return;

    if (quantity <= 0) {
      delete updatedCart[itemId][size];

      if (Object.keys(updatedCart[itemId]).length === 0) {
        delete updatedCart[itemId];
      }
    } else {
      updatedCart[itemId][size] = quantity;
    }

    setCartItems(updatedCart);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        totalCount += cartItems[itemId][size];
      }
    }

    return totalCount;
  };
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const product = products.find((item) => item._id === itemId);

      if (!product) continue;

      for (const size in cartItems[itemId]) {
        totalAmount += product.price * cartItems[itemId][size];
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    updateQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
