import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-blue-6 texrt-sm shadow-lg ">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login "}
        </p>
        <p>
          Please {state === "Sign Up" ? "Sign Up" : "Log In "} To Book An
          Appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full ">
            <p>Full Name</p>
            <input
              className="w-full p-2 mt-1 border rounded border-blue-2"
              type="text"
              onChange={(e) => setName(e.target.name)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full ">
          <p>Email</p>
          <input
            className="w-full p-2 mt-1 border rounded border-blue-2"
            type="email"
            onChange={(e) => setEmail(e.target.name)}
            value={email}
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            className="w-full p-2 mt-1 border rounded border-blue-2"
            type="password"
            onChange={(e) => setPassword(e.target.name)}
            value={password}
            required
          />
        </div>
        <button className="w-full py-2 text-base text-white rounded-md bg-blue-6">
          {state === "Sign Up" ? "Create Account" : "Login "}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="font-light underline cursor-pointer text-blue-8"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Creat a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="font-light underline cursor-pointer text-blue-8"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
