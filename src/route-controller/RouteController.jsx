import {lazy} from 'react'
import {useRoutes} from "react-router-dom";
import {SuspenseElement as Suspense} from "../utils/index.jsx";
import DetailsPage from "./details-page/DetailsPage.jsx";

const Auth = lazy(() => import("./auth/Auth.jsx"));
const SignUp = lazy(() => import("./auth/sign-up/SignUp.jsx"));
const SignIn = lazy(() => import("./auth/sign-in/SignIn.jsx"));

const Home = lazy(() => import("./home/Home.jsx"));
const Details = lazy(() => import("./details-page/DetailsPage.jsx"));

const RouteController = () => {
  return useRoutes([
    {
      path: "auth-form",
      element: <Suspense><Auth/></Suspense>,
      children: [
        {
          path: "",
          element: <Suspense><SignUp/></Suspense>,
        },
        {
          path: "sign-in",
          element: <Suspense><SignIn/></Suspense>,
        }
      ]
    },
    {
      path: "",
      element: <Suspense><Home/></Suspense>
    },
    {
      path: "details-page/:id",
      element: <Suspense><DetailsPage/></Suspense>,
    }
  ])
}
export default RouteController
