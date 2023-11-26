import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },
    {
        path: "/cadastre-se",
        element: <SignUp />,
    },
    {
        path: "/inicio",
        element: <Home />,
    },
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
}