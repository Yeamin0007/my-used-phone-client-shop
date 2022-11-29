import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../hooks/UseAdmin/useAdmin";

const AdminRoutes = ({children}) =>{
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if(loading || isAdminLoading){
        return <progress className="progress flex justify-center items-center mx-auto w-56"></progress>;
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
}
export default AdminRoutes;