import "./adminList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext/AdminContext";
import { deleteAdmin, getAdmins } from "../../context/adminContext/ApiCalls";

export default function AdminList() {
  const { admins, dispatch } = useContext(AdminContext);

  useEffect(() => {
    getAdmins(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteAdmin(id, dispatch);
    window.location.reload();
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "username", headerName: "UserName", width: 200 },
    { field: "email", headerName: "email address", width: 200 },
    { field: "isSuperAdmin", headerName: "IsSuperAdmin", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/${params.row._id}`} state={{ admin: params.row }}>
              <button className="productListEdit buttonEdit">Edit</button>
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
        <h1 className="productTitle">ADMIN</h1>
        <Link to="/newadmin">
          <button className="productAddButton button">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={admins}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
