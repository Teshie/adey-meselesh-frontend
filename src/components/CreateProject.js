import React, { useEffect, useState } from "react";
import apiClient from "./auth/resources/apiClient";
import http from "./auth/resources/http";
import Dashboard from "./Dashboard/Dashboard";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [password, setPassword] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const baseURL = "http://127.0.0.1:8000/api/projects/get-project-ststus";
  const baseURLs = "http://127.0.0.1:8000/api/projects/list-employee";
  useEffect(() => {
    http
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log("No Data To Show");
        }
      )
      .catch((err) => {
        return false;
      });
  }, []);
  useEffect(() => {
    http
      .get(baseURLs)
      .then((response) => {
        setDatas(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log("No Data To Show");
        }
      )
      .catch((err) => {
        return false;
      });
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.auth
        .projects({
          created_by: createdBy,
          project_name: name,
          status: status,
          start_date: start,
          end_date: end,
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
    <div className="flex justify-between space-x-36">
      {" "}
      <Dashboard />
      <div className="flex items-center justify-center  shadow-md ">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">Create Project</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Project Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex flex-col">
                <select
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                >
                  <option value="1" selected="selected">
                    Select Employee
                  </option>
                  {datas?.map((x, y) => (
                    <option>{x.employee_name}</option>
                  ))}
                </select>
                <select
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1" selected="selected">
                    Project Status
                  </option>
                  {data?.map((x, y) => (
                    <option>{x.value}</option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <labe>Start Date</labe>

                <input
                  onChange={(e) => setStart(e.target.value)}
                  value={start}
                  required
                  type="date"
                  placeholder="First Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <labe>End Date</labe>
                <input
                  onChange={(e) => setEnd(e.target.value)}
                  value={end}
                  required
                  type="date"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button
                  onClick={(e) => {
                    submit(e);
                  }}
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-900"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
