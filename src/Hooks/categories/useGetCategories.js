import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./categoriesFunctions";


const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategories(),
        refetchInterval: 1000,
        staleTime: 5000
    });
}

export default useGetCategories