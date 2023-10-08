import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AnimalDetailsPage from "../pages/AnimalDetailsPage";
import ContactUsPage from "../pages/ContactUsPage";

const routerConfig = (opt = {}) => {
    return createBrowserRouter([
        { path: "/", element: <App />},
        { path: '/login', element: <div>Login page</div>},
        { path: '/register', element: <div>Register page</div>},
        { path: '/animal/:id', element: <AnimalDetailsPage />},
        { path: '/contact', element: <ContactUsPage/>}
    ])
}

export default routerConfig;