import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const useSubscriptions = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['subscriptions', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/subscriptions?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useSubscriptions;