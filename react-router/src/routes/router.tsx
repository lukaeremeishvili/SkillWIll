import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import About from "../pages/about";
import ErrorPage from "../pages/error";
import { homeLoader } from '../loaders/homeloader';
import { formAction } from "../loaders/formaction";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />, 
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "about",
          element: <About />,
          action: formAction,
        },
      ],
    },
  ]);