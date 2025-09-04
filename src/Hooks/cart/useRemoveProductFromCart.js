import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProductFromCart } from "./cartFunctions";
import toast from "react-hot-toast";

const useRemoveProductFromCart = () => {

    const query = useQueryClient();
    const mutation = useMutation({
        mutationFn: (productId) => removeProductFromCart(productId),
        onSuccess: () => {
            query.invalidateQueries(["cart"]);
            toast.success("Item removed from cart ✅");
        },
        onError: (error) => {
            console.error("Error removing from cart:", error);
            toast.error("Failed to remove item from cart ❌");
        },
    })

    return mutation
}

export default useRemoveProductFromCart