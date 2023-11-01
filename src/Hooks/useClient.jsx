import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useClient = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isClient, isLoading: isClientLoading} = useQuery({
        queryKey: ['isClient', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/subscriptions/client/${user?.email}`);
            return res.data.client;
        }
    })
    return [isClient, isClientLoading]
}
export default useClient;