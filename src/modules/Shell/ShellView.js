import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { Loader } from "../../components";
import DashboardContainer from "../Dashboard";
import { StyledShellWrapper } from "./Shell.styled";
import { useSelector, shallowEqual } from "react-redux";

const ShellView = () => {
  const userList = useSelector(
    (state) => state.applicationReducer?.userList,
    shallowEqual
  );
  const { loading, data } = userList || {};

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <StyledShellWrapper>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/dashboard" />;
        }}
      />
      <Route path="/dashboard" render={() => <DashboardContainer />} />
    </StyledShellWrapper>
  );
};

export default ShellView;
