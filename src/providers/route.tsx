import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/home";
import App from "../App";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default () => <RouterProvider router={route} />;
