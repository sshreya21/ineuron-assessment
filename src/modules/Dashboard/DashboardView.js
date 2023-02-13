import React from "react";
import UsersList from "./UsersList";
import AddUserSection from "./AddUserSection";
import { StyledDashboardContainer, StyleHeading } from "./Dashboard.styled";
const DashboardView = () => {
  return (
    <StyledDashboardContainer>
      <StyleHeading>Welcome to User Dashboard</StyleHeading>
      <AddUserSection />
      <UsersList />
    </StyledDashboardContainer>
  );
};

export default DashboardView;
