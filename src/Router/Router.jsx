import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import AllModels from "../Components/AllModels/AllModels";
import AddModels from "../Components/AddModels/AddModels";
import Login from "../Components/Authentication/Login/Login/Login/HandleLogin/HandleLogin/Login";
import Register from "../Components/Authentication/Login/Login/Login/HandleLogin/HandleLogin/register";
import Loader from "../Components/Loader/Loader";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ModelDetailsCard from "../Components/ModelDetails/ModelDetails";
import UpdateModel from "../Components/UpdateModel/UpdateModel";

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
                loader: () => fetch('http://localhost:5002/allmodels'),
                Component: AllModels,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/modelDetails/:id',
                element: <PrivateRoute>
                    <ModelDetailsCard></ModelDetailsCard>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5002/allmodels/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/UpdateModel/:id',
                element: <PrivateRoute>
                    <UpdateModel></UpdateModel>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5002/allmodels/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/addmodels',
                element: <PrivateRoute>
                    <AddModels></AddModels>
                </PrivateRoute>
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