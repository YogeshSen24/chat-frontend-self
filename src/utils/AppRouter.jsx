import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Chat from "../pages/Chat.jsx";
import AddFriend from "../pages/AddFriend.jsx";
import Groups from "../pages/Group.jsx";
import Requests from "../pages/Requests.jsx";
import Settings from "../pages/Settings.jsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path="groups"
                        element={<Groups />}
                    />
                    <Route
                        path="requests"
                        element={<Requests />}
                    />
                    <Route
                        path="settings"
                        element={<Settings />}
                    />
                    <Route
                        path="chat"
                        element={<Chat />}>
                        <Route
                            path="add"
                            element={<AddFriend />}
                        />
                    </Route>
                </Route>
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;