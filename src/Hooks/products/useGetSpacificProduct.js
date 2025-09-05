import { useQuery } from "@tanstack/react-query";
import { getSpacificProduct } from "./productsFunctions";

const useGetSpacificProduct = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getSpacificProduct(id),
        refetchInterval: 1000,
        staleTime: 5000
    })
}

export default useGetSpacificProduct