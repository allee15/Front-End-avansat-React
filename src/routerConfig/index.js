import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AnimalDetailsPage from "../pages/AnimalDetailsPage";
import ContactUsPage from "../pages/ContactUsPage";
import SignIn from "../components/auth/SigIn";
import Register from "../components/auth/Register";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const routerConfig = (opt = {}) => {
    return createBrowserRouter([
        { path: "/", element: <App />},
        { path: '/login', element: <SignIn/>},
        { path: '/register', element: <Register/>},
        { path: '/animal/:id', element: <PrivateRoute><AnimalDetailsPage /></PrivateRoute>}, // Wrap the AnimalDetailsPage with PrivateRoute
        { path: '/contact', element: <ContactUsPage/>},
        { path: '/user-profile', element: <PrivateRoute><UserProfile/></PrivateRoute>} // Wrap the UserProfile with PrivateRoute
    ])
}

export default routerConfig;
