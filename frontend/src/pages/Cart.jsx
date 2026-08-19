import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);

  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const items = [];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];

        if (quantity > 0) {
          items.push({ itemId, size, quantity });
        }
      }
    }

    setCartData(items);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title text1="YOUR " text2="CART" />
      </div>

      {cartData.length === 0 ? (
        <p className="py-10 text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartData.map((item) => {
            const product = products.find(
              (productItem) => productItem._id === item.itemId,
            );

            if (!product) return null;

            return (
              <div
                key={`${item.itemId}-${item.size}`}
                className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 py-4 text-gray-700 border-t md:grid-cols-[4fr_2fr_0.5fr]"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-16 sm:w-20"
                  />

                  <div>
                    <p className="text-xs font-medium sm:text-lg">
                      {product.name}
                    </p>

                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {product.price}
                      </p>

                      <p className="px-2 border bg-slate-50 sm:px-3 sm:py-1">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) =>
                    updateQuantity(
                      item.itemId,
                      item.size,
                      Number(event.target.value),
                    )
                  }
                  className="max-w-10 px-1 py-1 border sm:max-w-20 sm:px-2"
                />

                <img
                  onClick={() => updateQuantity(item.itemId, item.size, 0)}
                  src={assets.bin_icon}
                  alt="Remove item"
                  className="w-4 mr-4 cursor-pointer sm:w-5"
                />
              </div>
            );
          })}

          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />

              <div className="w-full text-end">
                <button
                  onClick={() => navigate("/place-order")}
                  className="px-8 py-3 my-8 text-sm text-white bg-black active:bg-gray-700"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
