import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Home = () => {
  return (
    <div className="home">
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  );
};

export default Home;
