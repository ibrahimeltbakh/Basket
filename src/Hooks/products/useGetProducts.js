import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./productFunctions";


const useGetProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(),
        refetchInterval: 1000,
        staleTime: 5000
    });
}

export default useGetProducts