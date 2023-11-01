import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSeller = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isSeller, isLoading: isSellerLoading} = useQuery({
        queryKey: ['isSeller', user?.email],

        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/seller/${user?.email}`);

            return res.data?.seller;
           
        }

    })

    return [isSeller, isSellerLoading]
}

export default useSeller;