import "./sidebar.css";
import { Home, PermIdentity, Apartment, Add } from "@material-ui/icons";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  if (user) {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          {user.isSuperAdmin ? (
            <>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                  <NavLink to="/" className="link" activeclassname="active">
                    <li className="sidebarListItem">
                      <Home className="sidebarIcon" />
                      Home
                    </li>
                  </NavLink>

                  <NavLink
                    to="/users"
                    className="link"
                    activeclassname="active"
                  >
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Employees
                    </li>
                  </NavLink>

                  <NavLink to="/orgs" className="link" activeclassname="active">
                    <li className="sidebarListItem">
                      <Apartment className="sidebarIcon" />
                      Organizations
                    </li>
                  </NavLink>
                  <NavLink
                    to="/admin"
                    className="link"
                    activeclassname="active"
                  >
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Admins
                    </li>
                  </NavLink>
                </ul>
              </div>

              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Action Menu</h3>
                <ul className="sidebarList">
                  <NavLink
                    to="/neworg"
                    className="link"
                    activeclassname="active"
                  >
                    <li className="sidebarListItem">
                      <Add className="sidebarIcon" />
                      New Organization
                    </li>
                  </NavLink>
                  <NavLink
                    to="/newadmin"
                    className="link"
                    activeclassname="active"
                  >
                    <li className="sidebarListItem">
                      <Add className="sidebarIcon" />
                      New Admin
                    </li>
                  </NavLink>
                </ul>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                  <NavLink to="/" className="link" activeclassname="active">
                    <li className="sidebarListItem">
                      <Home className="sidebarIcon" />
                      Home
                    </li>
                  </NavLink>

                  <NavLink
                    to="/employees"
                    className="link"
                    activeclassname="active"
                  >
                    <li className="sidebarListItem">
                      <PermIdentity className="sidebarIcon" />
                      Employees
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Action Menu</h3>
                <ul className="sidebarList">
                  <NavLink
                    to="/newuser"
                    className="link"
                    activeclassname="active"
                  >
                    <li className="sidebarListItem">
                      <Add className="sidebarIcon" />
                      New Employee
                    </li>
                  </NavLink>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
