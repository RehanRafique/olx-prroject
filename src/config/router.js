import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from '../view/dashboard'
import Detail from "../view/detail";
import Register from "../view/register";
import LogIn from "../view/login";
const router = createBrowserRouter([

    {
        path: '/',
        element: <Register />,
        },

        {
            path: '/login',
            element: <LogIn />,
            },

{
path: "/dashboard/",
element: <Dashboard />,
}
,
{
path: `/details/:Id`,
element: <Detail />,
},

]);
function Router() {

return <RouterProvider router={router} />
}
export default Router;