import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "./resources/apiClient";
import http from "./resources/http";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.auth
        .signup({
          username: username,
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
        })
        .then(
          (result) => {
            alert("SignUp Success");
          },
          (error) => {
            alert("SignUp Failed! Try Again!");
          }
        );
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="flex items-center justify-center  ">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Create your account</h3>
        <form action="">
          <div className="mt-4">
            <div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
                required
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
                required
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                onClick={(e) => {
                  submit(e);
                }}
                className="px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-900"
              >
                SignUp
              </button>
              <p
                onClick={(e) => navigate("/")}
                className="text-sm  cursor-pointer text-blue-600 hover:underline"
              >
                Login
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
