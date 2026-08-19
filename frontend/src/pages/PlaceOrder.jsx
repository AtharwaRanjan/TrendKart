import { useState } from "react";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your order will be placed after we connect the backend.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between gap-4 pt-5 border-t sm:flex-row sm:pt-14 min-h-[80vh]"
    >
      <div className="w-full sm:max-w-[480px]">
        <div className="mb-5 text-xl sm:text-2xl">
          <Title text1="DELIVERY " text2="INFORMATION" />
        </div>

        <div className="flex gap-3">
          <input
            required
            type="text"
            placeholder="First name"
            className="w-full px-3 py-1.5 border border-gray-300 rounded"
          />
          <input
            required
            type="text"
            placeholder="Last name"
            className="w-full px-3 py-1.5 border border-gray-300 rounded"
          />
        </div>

        <input
          required
          type="email"
          placeholder="Email address"
          className="w-full px-3 py-1.5 mt-4 border border-gray-300 rounded"
        />

        <input
          required
          type="text"
          placeholder="Street"
          className="w-full px-3 py-1.5 mt-4 border border-gray-300 rounded"
        />

        <div className="flex gap-3 mt-4">
          <input
            required
            type="text"
            placeholder="City"
            className="w-full px-3 py-1.5 border border-gray-300 rounded"
          />
          <input
            required
            type="text"
            placeholder="State"
            className="w-full px-3 py-1.5 border border-gray-300 rounded"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <input
            required
            type="number"
            placeholder="Zip code"
            className="w-full px-3 py-1.5 border border-gray-300 rounded"
          />
          <input
            required
            type="text"
            placeholder="Country"
            className="w-full px-3 py-1.5 border border-gray-300 rounded"
          />
        </div>

        <input
          required
          type="tel"
          placeholder="Phone"
          className="w-full px-3 py-1.5 mt-4 border border-gray-300 rounded"
        />
      </div>

      <div className="w-full sm:w-[450px]">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <div className="mb-3 text-xl sm:text-2xl">
            <Title text1="PAYMENT " text2="METHOD" />
          </div>

          <div className="flex flex-col gap-3 lg:flex-row">
            <button
              type="button"
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 p-2 border-2 ${
                method === "stripe" ? "border-gray-500" : "border-gray-200"
              }`}
            >
              <span
                className={`w-3.5 h-3.5 rounded-full border ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              />
              <img src={assets.stripe_logo} alt="Stripe" className="h-5 mx-4" />
            </button>

            <button
              type="button"
              onClick={() => setMethod("razorpay")}
              className={`flex items-center gap-3 p-2 border-2 ${
                method === "razorpay" ? "border-gray-500" : "border-gray-200"
              }`}
            >
              <span
                className={`w-3.5 h-3.5 rounded-full border ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              />
              <img
                src={assets.razorpay_logo}
                alt="Razorpay"
                className="h-5 mx-4"
              />
            </button>

            <button
              type="button"
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 p-2 border-2 ${
                method === "cod" ? "border-gray-500" : "border-gray-200"
              }`}
            >
              <span
                className={`w-3.5 h-3.5 rounded-full border ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              />
              <p className="mx-4 text-sm font-medium text-gray-500">
                CASH ON DELIVERY
              </p>
            </button>
          </div>

          <div className="mt-8 text-end">
            <button
              type="submit"
              className="px-16 py-3 text-sm text-white bg-black active:bg-gray-700"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
