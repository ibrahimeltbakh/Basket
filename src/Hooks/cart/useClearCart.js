import { useQueryClient, useMutation } from "@tanstack/react-query"
import { clearCart } from "./cartFunctions"
import toast from "react-hot-toast";



const useClearCart = () => {
    const query = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => clearCart(),
        onSuccess: () => {
            query.invalidateQueries(["cart"]);
            toast.success("Cart cleared ✅");
        },
        onError: (error) => {
            console.error("Error clearing cart:", error);
            toast.error("Failed to clear cart ❌");
        },
    })

    return mutation
}

export default useClearCart;