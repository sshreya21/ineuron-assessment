import React from "react";
import history from "../../history";
import ButtonWrapper from "../../components/ButtonWrapper";

const SubRouteComponent = (props) => {
  return (
    <>
      <h1>This is sample child routes component</h1>
      <ButtonWrapper>
        <button
          onClick={() => {
            history.push("/home");
          }}
          type="button"
        >
          Go back to home
        </button>
      </ButtonWrapper>
    </>
  );
};

export default SubRouteComponent;
