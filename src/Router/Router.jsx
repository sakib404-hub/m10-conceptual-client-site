import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import AllModels from "../Components/AllModels/AllModels";
import AddModels from "../Components/AddModels/AddModels";
import Login from "../Components/Authentication/Login/Login/Login/HandleLogin/HandleLogin/Login";
import Register from "../Components/Authentication/Login/Login/Login/HandleLogin/HandleLogin/register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/allmodels',
                Component: AllModels
            },
            {
                path: '/addmodels',
                Component: AddModels
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])