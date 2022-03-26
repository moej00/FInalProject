import { useState } from "react";
import "./newOrg.css";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAdmins } from "../../context/adminContext/ApiCalls";
import { OrgContext } from "../../context/orgContext/OrgContext";
import { createOrg } from "../../context/orgContext/ApiCalls";

export default function NewOrg() {
  const [org, setOrg] = useState(null);
  const navigate = useNavigate();

  const { orgs, dispatch: dispatchOrg } = useContext(OrgContext);
  const { dispatch } = useContext(OrgContext);

  useEffect(() => {
    getAdmins(dispatchOrg);
  }, [dispatchOrg]);

  const changeHandler = (e) => {
    const value = e.target.value;
    setOrg({ ...org, [e.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createOrg(org, dispatch);
    navigate("/orgs");
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Organization</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Name</label>
            <input
              type="text"
              placeholder="Organization Name"
              name="name"
              onChange={changeHandler}
            />
          </div>

          <div className="addProductItem">
            <label>Description</label>
            <input
              type="text"
              placeholder="description"
              name="description"
              onChange={changeHandler}
            />
          </div>
        </div>
        <Link to="/orgs">
          <button className="addProductButton button" onClick={submitHandler}>
            Create
          </button>
        </Link>
      </form>
    </div>
  );
}
