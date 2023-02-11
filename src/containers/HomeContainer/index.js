import React from "react";
import HomeComponent from "../../components/HomeComponent";
import ApplicationRouter from "../../router/ApplicationRouter";
import history from "../../history";
import HomeComponentWrapper from "./HomeComponentWrapper";
import useAPI from "../../hooks/useAPI";
import ButtonWrapper from "../../components/ButtonWrapper";

const HomeContainer = (props) => {
  const [homePageData = {}, getHomePageData] = useAPI("FETCH_HOME_DATA", {
    lazy: true,
  });

  function onClickFailureButton() {
    getHomePageData({ isSuccess: false });
  }

  function onClickSuccessButton() {
    getHomePageData({ isSuccess: true });
  }

  return (
    <HomeComponentWrapper>
      <HomeComponent
        onClickSuccessButton={onClickSuccessButton}
        onClickFailureButton={onClickFailureButton}
        homePageData={
          homePageData.error
            ? { message: "Something Went Wrong" }
            : homePageData.data
        }
        fetchHomeDataFailed={homePageData.error}
      />
      <ButtonWrapper>
        <button
          onClick={() => {
            history.push("/home/subroute");
          }}
          type="button"
        >
          Render subcomponent
        </button>
      </ButtonWrapper>
      {props.routes.map((route, index) => {
        return <ApplicationRouter key={index} {...route} />;
      })}
    </HomeComponentWrapper>
  );
};

export default HomeContainer;
