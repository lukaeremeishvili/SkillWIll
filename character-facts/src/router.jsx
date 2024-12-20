import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import FactPage from "./pages/FactPage";

const router = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <AboutPage />,
    path: "about",
  },
  {
    element: <FactPage />,
    path: "fact/:factId",
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
