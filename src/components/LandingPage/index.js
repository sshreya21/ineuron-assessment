import React from "react";
import history from "../../history";
import LandingPageWrapper from "./LandingPageWrapper";
import ButtonWrapper from "../ButtonWrapper";

const LandingPage = (props) => {
  return (
    <LandingPageWrapper>
      <h1>Welcome to skeleton application</h1>
      <ButtonWrapper>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("home");
          }}
          type="button"
        >
          Take me to home
        </button>
      </ButtonWrapper>
    </LandingPageWrapper>
  );
};

export default LandingPage;
