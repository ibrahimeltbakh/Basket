import { useQueryClient, useMutation } from "@tanstack/react-query"
import { updateProductInCart } from "./cartFunctions"
import toast from "react-hot-toast"


const useUpdateProductIncart = () => {
    const query = useQueryClient();

    const mutation = useMutation({
        mutationFn: (productId, quantity) => updateProductInCart(productId, quantity),
        onSuccess: () => {
            query.invalidateQueries(["cart"]);
            toast.success("Item Updated ✅");
        },
        onError: (error) => {
            console.error("Error updateing cart:", error);
            toast.error("Failed to update quantity ❌");
        },
    })

    return mutation
}

export default useUpdateProductIncart