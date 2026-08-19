import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      currentState === "Login"
        ? "Login will be connected to the backend next."
        : "Account creation will be connected to the backend next.",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] gap-4 m-auto mt-14 text-gray-800 sm:max-w-96"
    >
      <div className="inline-flex items-center gap-2 mt-10 mb-2">
        <p className="text-3xl prata-regular">{currentState}</p>
        <hr className="w-8 h-[1.5px] bg-gray-800 border-none" />
      </div>

      {currentState === "Login" ? null : (
        <input
          required
          type="text"
          placeholder="Your name"
          className="w-full px-3 py-2 border border-gray-800"
        />
      )}

      <input
        required
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-800"
      />

      <input
        required
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border border-gray-800"
      />

      <div className="flex justify-between w-full mt-[-8px] text-sm">
        <button type="button" className="cursor-pointer">
          Forgot your password?
        </button>

        {currentState === "Login" ? (
          <button
            type="button"
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </button>
        )}
      </div>

      <button className="px-8 py-2 mt-4 font-light text-white bg-black">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
