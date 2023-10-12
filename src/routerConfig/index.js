import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AnimalDetailsPage from "../pages/AnimalDetailsPage";
import ContactUsPage from "../pages/ContactUsPage";
import SignIn from "../components/auth/SigIn";

const routerConfig = (opt = {}) => {
    return createBrowserRouter([
        { path: "/", element: <App />},
        { path: '/login', element: <SignIn/>},
        { path: '/register', element: <div>Register page</div>},
        { path: '/animal/:id', element: <AnimalDetailsPage />},
        { path: '/contact', element: <ContactUsPage/>}
    ])
}

export default routerConfig;