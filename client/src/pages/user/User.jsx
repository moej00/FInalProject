import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { UpdateUser } from "../../context/userContext/ApiCalls";
import { useState } from "react";
import { useContext } from "react";

import "./user.css";

export default function User() {
  const location = useLocation();
  const { user } = location.state;
  const [userUpdate, setUserUpdate] = useState();

  const { dispatch } = useContext(AuthContext);
  const changeHandler = (e) => {
    const value = e.target.value;
    setUserUpdate({ ...user, [e.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    UpdateUser(userUpdate, dispatch);
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>

            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>User Name:</label>
            <input
              type="text"
              name="username"
              placeholder={user.username}
              onChange={changeHandler}
            />

            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder={user.email}
              onChange={changeHandler}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton button" onClick={submitHandler}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
