import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useState } from "react";

export default function Employees() {
  const { user } = useContext(AuthContext);
  const [org, getOrg] = useState([]);

  useEffect(() => {
    const getOrgs = async () => {
      try {
        const res = await axios.get("/orgs/single/" + user._id, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        getOrg(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getOrgs();
  }, []);

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Employees</h1>
        <Link to="/createneworg">
          <button className="productAddButton button">Create</button>
        </Link>
      </div>
      <div>
        {" "}
        <table>
          <thead>Employees Id</thead>
          {org.map((data) => {
            return (
              <>
                <Link to={`/users/`}>
                  <tr>
                    <td key={data}>{data.users}</td>
                  </tr>
                </Link>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}
