import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./page/Homepage.jsx";
import ProfilePage from "./page/ProfilePage.jsx";
import Header from "./page/shared/Header.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/profile",
    element: (
      <div>
        <Header />
        <div>THis is just blank</div>
      </div>
    ),
  },

  {
    path: "/profile/:id",
    element: <ProfilePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
