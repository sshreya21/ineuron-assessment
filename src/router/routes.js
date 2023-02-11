import HomeContainer from "../containers/HomeContainer";
import LandingPage from "../components/LandingPage";
import SubRouteComponent from "../containers/HomeContainer/SubRouteComponent";
const routes = [
  {
    path: "/",
    exact: true,
    component: LandingPage,
  },
  {
    path: "/home",
    component: HomeContainer,
    routes: [
      {
        path: "/home/subroute",
        exact: true,
        component: SubRouteComponent,
      },
    ],
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
];

export default routes;
