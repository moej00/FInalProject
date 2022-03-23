import { useState } from "react";
import "./newAdmin.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/adminContext/AdminContext";
import { createAdmin } from "../../context/adminContext/ApiCalls";

export default function NewAdmin() {
  const [admin, setAdmin] = useState(null);

  const { dispatch } = useContext(AdminContext);
  const changeHandler = (e) => {
    const value = e.target.value;
    setAdmin({ ...admin, [e.target.name]: value });
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
            placeholder="username"
            name="username"
            onChange={changeHandler}
          />
        </div>

        <div className="addProductItem">
          <label>email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={changeHandler}
          />
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
        <Link to="/admin">
          <button className="addProductButton button" onClick={submitHandler}>
            Create
          </button>
        </Link>
      </form>
    </div>
  );
}
