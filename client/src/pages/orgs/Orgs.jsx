import "./orgs.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { OrgContext } from "../../context/orgContext/OrgContext";
import { deleteOrg, getOrgs } from "../../context/orgContext/ApiCalls";

export default function Orgs() {
  const { orgs, dispatch } = useContext(OrgContext);

  useEffect(() => {
    getOrgs(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrg(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "users", headerName: "Users", width: 150 },
    { field: "admin", headerName: "Admin", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/org/${params.row._id}`} state={{ org: params.row }}>
              <button className="productListEdit buttonEdit">View</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Organizations</h1>
        <Link to="/createneworg">
          <button className="productAddButton button">Create</button>
        </Link>
      </div>

      <DataGrid
        rows={orgs}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
