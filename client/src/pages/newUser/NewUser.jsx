import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { createUser } from "../../context/userContext/ApiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import "./newUser.css";

export default function NewUser() {
  const [user, setUser] = useState(null);

  const { dispatch } = useContext(UserContext);
  const changeHandler = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={changeHandler}
          />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            onChange={changeHandler}
          />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={changeHandler}
          />
        </div>

        <div className="newUserItem">
          <label>address</label>
          <input
            type="text"
            name="address"
            placeholder="address"
            onChange={changeHandler}
          />
        </div>

        <div className="newUserItem">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            onChange={changeHandler}
          />
        </div>

        <Link to="/users">
          <button className="newUserButton button" onClick={submitHandler}>
            Create
          </button>
        </Link>
      </form>
    </div>
  );
}
