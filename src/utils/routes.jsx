import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Chat from "../pages/Chat.jsx";
import AddFriend from "../pages/AddFriend.jsx";
import Groups from "../pages/Group.jsx"
import Requests from "../pages/Requests.jsx"
import Settings from "../pages/Settings.jsx";

let routes;

export default routes = createBrowserRouter( [
    {
        path: "/",
        element: <Layout />,
        childrens: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "groups",
                element: <Groups />
            },
            {
                path: "requests",
                element: <Requests />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "chat",
                element: <><Outlet/></>,
                children: [
                    {
                        path : "",
                        element:<Chat/>
                    },
                    {
                        path : "add",
                        element:<AddFriend/>
                    }
                ]

            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
])