import React, { useEffect, useState } from "react";
import http from "../auth/resources/http";
import Dashboard from "./Dashboard";

const ListProjects = () => {
  const baseURL = "http://127.0.0.1:8000/api/projects/list-projects";
  const [data, setData] = useState([]);

  useEffect(() => {
    http
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log(err);
        }
      );
  }, []);
  console.log(data, "projects");
  const DisplayData = data.map((p) => {
    return (
      <>
        <tr key={p.id}>
          <td>{p.project_name}</td>
          <td>{p.created_by ? p.created_by : "Paul"}</td>
          <td>{p.start_date}</td>
          <td>{p.start_date}</td>
          <td>{p.status}</td>
        </tr>
      </>
    );
  });
  return (
    <div className="flex justify-between space-x-36">
      {" "}
      <Dashboard />
      <div className="p-10">
        <table class="border border-separate border-separate my-table-spacing">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Created By</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProjects;
