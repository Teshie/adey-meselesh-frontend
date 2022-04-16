import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../auth/resources/apiClient";
import { set_token, set_user_data, set_user_status } from "./store/actions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter email");
    } else if (password === "") {
      alert("Please enter password");
    } else if (email.length < 4 || password.length < 5) {
      alert("Email length should be atleast six character");
    } else {
      try {
        const response = await apiClient.auth
          .login({
            username: email,
            password: password,
          })
          .then(
            (response) => {
              set_token(response.data.access);
              set_user_data(response.data);
              set_user_status({
                approved: response.data.approved,
                loggedIn: true,
                token: response.data.accessToken,
              });

              return navigate("/list-project");
            },
            (err) => {
              alert(err);
            }
          );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="flex flex-col justify-center items-center px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form action="">
          <div className="mt-4">
            <div>
              <label className="block" for="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                type="password"
                placeholder="Password"
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
                Login
              </button>
              <p
                onClick={(e) => navigate("/signup")}
                className="text-sm  cursor-pointer text-blue-600 hover:underline"
              >
                Sign Up?
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
