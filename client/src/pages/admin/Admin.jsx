import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { AdminContext } from "../../context/adminContext/AdminContext";
import { updateAdmin } from "../../context/adminContext/ApiCalls";
import "./admin.css";

export default function Admin() {
  const location = useLocation();
  const { admin } = location.state;
  const [adminUpdate, setAdminUpdate] = useState(null);

  const { dispatch } = useContext(AdminContext);
  const changeHandler = (e) => {
    const value = e.target.value;
    setAdminUpdate({ ...admin, [e.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateAdmin(adminUpdate, dispatch);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Admin</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={admin.username} alt="" className="productInfoImg" />
            <span className="productName">{admin.email}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{admin._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">IsSuperAdmin:</span>
              <span className="productInfoValue">{admin.isSuperAdmin}</span>
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
              placeholder={admin.username}
              onChange={changeHandler}
            />

            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder={admin.email}
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
