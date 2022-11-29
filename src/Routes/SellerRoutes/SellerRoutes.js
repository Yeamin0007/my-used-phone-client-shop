import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useSeller from "../../hooks/UseSeller/useSeller";

const SellerRoutes = ({children}) =>{
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    if(loading || isSellerLoading){
        return <progress className="progress flex justify-center items-center mx-auto w-56"></progress>;
    }

    if(user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
}
export default SellerRoutes;