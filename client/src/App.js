import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Admin from "./pages/admin/Admin";
import AdminList from "./pages/adminList/AdminList";
import NewAdmin from "./pages/newAdmin/NewAdmin";
import OrgList from "./pages/orgList/OrgList";
import Org from "./pages/org/Org";
import NewOrg from "./pages/newOrg/newOrg";
import Employees from "./pages/employeebyorg/Employee";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate replace to="/" />}
            />

            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/admin" element={<AdminList />} />
            <Route path="/admin/:adminId" element={<Admin />} />
            <Route path="/newadmin" element={<NewAdmin />} />
            <Route path="/orgs" element={<OrgList />} />
            <Route path="/org/:orgId" element={<Org />} />
            <Route path="/neworg" element={<NewOrg />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
