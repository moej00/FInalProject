import { useLocation } from "react-router-dom";
import "./admin.css";

export default function Admin() {
  const location = useLocation();
  const { admin } = location.state;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Admin</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={admin?.username} alt="" className="productInfoImg" />
            <span className="productName">{admin?.email}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{admin?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">IsSuperAdmin</span>
              <span className="productInfoValue">{admin?.isSuperAdmin}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={admin?.username} />

            <label>Year</label>
            <input type="text" placeholder={admin?.email} />
          </div>
          <div className="productFormRight">
            <button className="productButton button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
