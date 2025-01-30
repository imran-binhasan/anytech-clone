const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../pages/Home");
const { default: NotFound } = require("../pages/NotFound");

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])

export default Router;