import { Link, useLocation } from "react-router-dom";
import "./newOrg.css";

export default function NewOrg() {
  const location = useLocation();
  const { org } = location.state;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Orginizations</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{org?.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{org?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Description:</span>
              <span className="productInfoValue">{org?.description}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">users:</span>
              <span className="productInfoValue">{org?.users}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">admin:</span>
              <span className="productInfoValue">{org?.admin}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
