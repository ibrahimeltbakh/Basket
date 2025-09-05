import { useQuery } from "@tanstack/react-query";
import { getSpacificCategory } from "./categoriesFunctions";

const useGitSpacificCategory = () => {
    return useQuery({
        queryKey: ["category"],
        queryFn: (id) => getSpacificCategory(id),
        refetchInterval: 1000,
        staleTime: 5000
    })
}

export default useGitSpacificCategory