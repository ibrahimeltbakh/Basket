import { supabase } from "@/lib/supabaseClient"


export const getCartProducts = async () => {
    const { data, error } = await supabase
        .from("cart")
        .select("*")
    if (error) throw new Error(error.message)
    return data
}

export const addtoCart = async (productId) => {
    const { data, error } = await supabase
        .from("cart")
        .insert([{ product_id: productId }])

    if (error) throw new Error(error.message)
    return data
}

export const removeProductFromCart = async (productId) => {
    const { data, error } = await supabase
        .from("cart")
        .delete()
        .eq("product_id", productId)
    if (error) throw new Error(error.message)
    return data
}

export const updateProductInCart = async (productId, quantity) => {
    const { data, error } = await supabase
        .from("cart")
        .update({ quantity: quantity })
        .eq("product_id", productId)
    if (error) throw new Error(error.message)
    return data
}

