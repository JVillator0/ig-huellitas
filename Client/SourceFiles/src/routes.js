import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Home from "./views/Home";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Registry from "./views/Registry"
import Login from "./views/Login"
import viewMore from "./views/ViewMore";





import Requests from "./views/Requests";
import MainFooter from "./components/layout/MainFooter";
import RouterService from "./services/RouterService";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />
  },

  {
    path: "/perfil",
    exact: true,
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/registry",
    layout: Registry,
  },
  {
    path: "/Login",
    layout: Login,
  },
  {
    path: "/Requests",
    layout: DefaultLayout,
    component: Requests
  },
  {
    path: "/nueva-publicacion",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
      path:"/view/:id",
      layout: DefaultLayout,
      component: viewMore,

    }
  ,
  {
    path: "/publicaciones",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: Home
  },

];
