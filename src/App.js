import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/CreateProject";
import ComingList from "./components/Dashboard/ComingList";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Dashboard/Header";
import ListProjects from "./components/Dashboard/ListProjects";
import OngoingList from "./components/Dashboard/OngoingList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className=" ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/list-project" element={<ListProjects />} />
          <Route path="/list-coming" element={<ComingList />} />
          <Route path="/list-ongoing" element={<OngoingList />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/users/:userId" element={<EditUser />} />
          <Route path="/companies" element={<ManageCompanies />} />
          <Route path="/companies/create" element={<CreateCompany />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
