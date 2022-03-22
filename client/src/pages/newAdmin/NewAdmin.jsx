import { useState } from "react";
import "./newAdmin.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/adminContext/AdminContext";
import { createAdmin } from "../../context/adminContext/ApiCalls";

export default function NewAdmin() {
  const [admin, setAdmin] = useState(null);
  const [adminEmail, setAdminEmail] = useState(null);
  const [adminUserName, setAdminUserName] = useState(null);

  const { dispatch } = useContext(AdminContext);
  const changeHandler = (e) => {
    const value = e.target.value;
    setAdmin({ ...admin, [e.target.name]: value });
  };

  const uploadHandler = (e) => {
    e.preventDefault();
  };
  const submitHandler = (e) => {
    e.preventDefault();
    createAdmin(admin, dispatch);
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Admin</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>User Name</label>
          <input
            type="text"
            placeholder={admin.username}
            name="username"
            onChange={changeHandler}
          />
        </div>

        <div className="addProductItem">
          <label>email</label>
          <input
            type="text"
            placeholder={admin.email}
            name="email"
            onChange={changeHandler}
          />
        </div>

        <div className="addProductItem">
          <label>Genre</label>
          <select name="genre" id="genre" onChange={changeHandler}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Is Super Admin?</label>
          <select
            name="isSuperAdmin"
            id="isSuperAdmin"
            onChange={changeHandler}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <Link to="/movies">
          <button className="addProductButton button" onClick={submitHandler}>
            Create
          </button>
        </Link>
      </form>
    </div>
  );
}
