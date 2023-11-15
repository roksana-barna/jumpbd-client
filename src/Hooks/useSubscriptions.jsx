import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const useSubscriptions = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['subscriptions', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://dropzey-server.vercel.app/subscriptions?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useSubscriptions;