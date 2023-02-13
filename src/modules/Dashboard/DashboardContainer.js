import React, { useEffect } from "react";
import DashboardView from "./DashboardView";
import { useSelector, shallowEqual } from "react-redux";

const DashboardContainer = () => {
  const userList = useSelector(
    (state) => state.applicationReducer?.userList,
    shallowEqual
  );
  useEffect(() => {}, [userList.data]);
  return <DashboardView />;
};

export default DashboardContainer;
