import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import Cms from "./Cms.jsx";
import Dashboard from "./pages/cms/Dashboard.jsx";
import AddItem from "./pages/cms/AddItem.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./store/index.js";
import { Provider } from "react-redux";
import EditItem from "./pages/cms/EditItem.jsx";
import Detail from "./pages/Detail.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  //User Page
  {
    element: <App />,
    // loader: () => {
    //   if(!localStorage.token){
    //     return redirect("/auth/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/",
        element: <Navigate to="/main/home" replace />,
      },
      {
        path: "/main/home",
        element: <Home />,
      },
      {
        path: "/main/detail/:id",
        element: <Detail />,
      },
      {
        path: "/main/cart",
        element: <Cart />,
        loader: () => {
          if (!localStorage.token) {
            return redirect("/auth/login");
          }
          return null;
        },
      },
      {
        path: "/main/about",
        element: <About />,
      },
    ],
  },
  //Auth Page
  {
    path: "/auth/login",
    element: <Login />,
    loader: () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/auth/register",
    element: <Register />,
    loader: () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
  },
  //Cms Page
  {
    element: <Cms />,
    loader: () => {
      if (!localStorage.token) {
        return redirect("/auth/login");
      }
      return null;
    },
    children: [
      {
        path: "/cms/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/cms/add",
        element: <AddItem />,
      },
      {
        path: "/cms/:id/edit",
        element: <EditItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
        <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
