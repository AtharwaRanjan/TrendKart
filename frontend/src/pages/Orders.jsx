import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  const orders = products.slice(0, 3).map((product, index) => ({
    ...product,
    quantity: index + 1,
    size: product.sizes?.[0] || "M",
    date: "19 August, 2026",
    payment: "Cash on Delivery",
    status: "Order Placed",
  }));

  return (
    <div className="pt-16 border-t">
      <div className="text-2xl">
        <Title text1="MY " text2="ORDERS" />
      </div>

      <div>
        {orders.map((item) => (
          <div
            key={item._id}
            className="flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-16 sm:w-20"
              />

              <div>
                <p className="font-medium sm:text-base">{item.name}</p>

                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>

                <p className="mt-2">
                  Date: <span className="text-gray-400">{item.date}</span>
                </p>

                <p>
                  Payment: <span className="text-gray-400">{item.payment}</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <p className="text-sm md:text-base">{item.status}</p>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert("Order tracking will be added with the backend.")
                }
                className="px-4 py-2 text-sm border rounded"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
