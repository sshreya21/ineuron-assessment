import React from "react";
import PropTypes from "prop-types";

import ButtonWrapper from "../ButtonWrapper";

const HomeComponent = ({
  onClickSuccessButton,
  onClickFailureButton,
  homePageData,
  fetchHomeDataFailed,
}) => {
  return (
    <>
      <h1>Routing and I18N example</h1>
      <h2>Welcome to react application sample</h2>
      <div>
        <ButtonWrapper>
          <button onClick={onClickSuccessButton} type="button">
            Click to get success data
          </button>
        </ButtonWrapper>
        {!fetchHomeDataFailed && homePageData.message && (
          <span>{homePageData.message}</span>
        )}
        <br />
        <ButtonWrapper>
          <button onClick={onClickFailureButton} type="button">
            Click to get error data
          </button>
        </ButtonWrapper>
        {fetchHomeDataFailed && homePageData.message && (
          <span>{homePageData.message}</span>
        )}
      </div>
    </>
  );
};

HomeComponent.propTypes = {
  onClickSuccessButton: PropTypes.func.isRequired,
  onClickFailureButton: PropTypes.func.isRequired,
  homePageData: PropTypes.object,
  fetchHomeDataFailed: PropTypes.bool,
};

HomeComponent.defaultProps = {
  homePageData: {},
  fetchHomeDataFailed: false,
};

export default HomeComponent;
