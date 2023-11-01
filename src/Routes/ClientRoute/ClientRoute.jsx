import { Navigate, useLocation } from "react-router";
import useClient from "../../Hooks/useClient";
import useAuth from "../../Hooks/useAuth";

// 
const ClientRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isClient, isClientLoading] = useClient();
    const location = useLocation();

    if(loading || isClientLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isClient) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
    
};

export default ClientRoute;