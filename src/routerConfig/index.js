import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AnimalDetailsPage from "../pages/AnimalDetailsPage";
import ContactUsPage from "../pages/ContactUsPage";
import SignIn from "../components/auth/SigIn";
import Register from "../components/auth/Register";
import UserProfile from "../pages/UserProfile/UserProfile";

const routerConfig = (opt = {}) => {
    return createBrowserRouter([
        { path: "/", element: <App />},
        { path: '/login', element: <SignIn/>},
        { path: '/register', element: <Register/>},
        { path: '/animal/:id', element: <AnimalDetailsPage />},
        { path: '/contact', element: <ContactUsPage/>},
        { path: '/user-profile', element: <UserProfile/>}
    ])
}

export default routerConfig;
