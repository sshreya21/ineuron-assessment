import React, { useEffect } from "react";
import DashboardView from "./DashboardView";
import { useSelector, shallowEqual } from "react-redux";

const DashboardContainer = () => {
  return <DashboardView />;
};

export default DashboardContainer;
