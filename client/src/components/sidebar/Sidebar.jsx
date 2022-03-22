import "./sidebar.css";
import { Home, PermIdentity, Apartment, Add } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link" activeclassname="active">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Home
              </li>
            </NavLink>

            <NavLink to="/users" className="link" activeclassname="active">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </NavLink>

            <NavLink to="/movies" className="link" activeclassname="active">
              <li className="sidebarListItem">
                <Apartment className="sidebarIcon" />
                Organization
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Action Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/newuser" className="link" activeclassname="active">
              <li className="sidebarListItem">
                <Add className="sidebarIcon" />
                New User
              </li>
            </NavLink>

            <NavLink to="/newmovie" className="link" activeclassname="active">
              <li className="sidebarListItem">
                <Add className="sidebarIcon" />
                New Organization
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
