
import { useQuery } from '@tanstack/react-query';
import { getCartProducts } from './cartFunctions';

const useGetCartProducts = () => {
  const cartProducts = useQuery({
    queryKey: ["cart"],
    queryFn: getCartProducts,
    refetchInterval: 1000,
    staleTime: 5000,
  });
  return cartProducts;
}

export default useGetCartProducts