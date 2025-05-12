import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-2xl bg-black/50">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your Email"
            className="text-white border-2 outline-none border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter your Password"
            className="text-white border-2 outline-none border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400"
          />
          <button className="text-white border-2 border-none cursor-pointer mt-6 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
