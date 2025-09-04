import { useQuery } from "@tanstack/react-query";
import { getSpacificProduct } from "./productFunctions";

const useGitSpacificProduct = () => {
    return useQuery({
        queryKey: ["product"],
        queryFn: (id) => getSpacificProduct(id),
        refetchInterval: 1000,
        staleTime: 5000
    })
}

export default useGitSpacificProduct