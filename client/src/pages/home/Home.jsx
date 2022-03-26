import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Work,
} from "@material-ui/icons";

const Home = () => {
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
    <div className="home">
      <div className="user">
        {org.map((data) => {
          console.log(data.name);
          return (
            <>
              <div className="userTitleContainer">
                <h1 className="userTitle">{data.name}</h1>
              </div>
              <div className="userContainer">
                <div className="userShow">
                  <div className="userShowTop">
                    <img
                      src="https://mpng.subpng.com/20201105/acz/transparent-user-avatar-with-check-mark-icon-admin-icon-techno-5fa3dfde0d4828.3236824716045751980544.jpg"
                      alt=""
                      className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                      <span className="userShowUsername">{user.username}</span>
                    </div>
                  </div>
                  <div className="userShowBottom">
                    <span className="userShowTitle">Organisation Details</span>
                    <div className="userShowInfo">
                      <Work className="userShowIcon" />
                      <span className="userShowInfoTitle">
                        {data.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <WidgetSm />
    </div>
  );
};

export default Home;
