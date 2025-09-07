import { supabase } from "../../lib/supabaseClient"
import { toast } from "react-hot-toast"

//get cart for a specific user
export const getCartProducts = async (userId) => {
    if (!userId) {
        toast.error("You must login first")
        return []
    }

    const { data, error } = await supabase
        .from("carts")
        .select("id, cart_items(*, products(*))")
        .eq("user_id", userId)
        .single()

    if (error && error.code !== "PGRST116") throw new Error(error.message)
    return data || {}
}

// add product to user cart
export const addToCart = async (userId, productId) => {
    if (!userId) {
        toast.error("Please login first to add to cart")
        return
    }

    // check if user already has a cart
    let { data: cart, error: cartError } = await supabase
        .from("carts")
        .select("id")
        .eq("user_id", userId)
        .single()

    if (cartError && cartError.code === "PGRST116") {
        // no cart found → create new one
        const { data: newCart, error: newCartError } = await supabase
            .from("carts")
            .insert([{ user_id: userId }])
            .select()
            .single()

        if (newCartError) throw new Error(newCartError.message)
        cart = newCart
    } else if (cartError) {
        throw new Error(cartError.message)
    }

    // check if product already exists in cart_items
    const { data: existingItem } = await supabase
        .from("cart_items")
        .select("id, quantity")
        .eq("cart_id", cart.id)
        .eq("product_id", productId)
        .single()

    if (existingItem) {
        // update quantity
        const { data, error } = await supabase
            .from("cart_items")
            .update({ quantity: existingItem.quantity + 1 })
            .eq("id", existingItem.id)
            .select()
            .single()

        if (error) throw new Error(error.message)
        return data
    } else {
        // insert new item
        const { data, error } = await supabase
            .from("cart_items")
            .insert([{ cart_id: cart.id, product_id: productId, quantity: 1 }])
            .select()
            .single()

        if (error) throw new Error(error.message)
        return data
    }
}


// remove product from user cart
export const removeProductFromCart = async (userId, productId) => {
    if (!userId) {
        toast.error("You must login first")
        return
    }

    // get cart
    const { data: cart } = await supabase
        .from("carts")
        .select("id")
        .eq("user_id", userId)
        .single()

    if (!cart) return

    const { data, error } = await supabase
        .from("cart_items")
        .delete()
        .eq("cart_id", cart.id)
        .eq("product_id", productId)

    if (error) throw new Error(error.message)
    return data
}

// update product quantity
export const updateProductInCart = async (userId, productId, quantity) => {
    if (!userId) {
        toast.error("You must login first")
        return
    }

    const { data: cart } = await supabase
        .from("carts")
        .select("id")
        .eq("user_id", userId)
        .single()

    if (!cart) return

    const { data, error } = await supabase
        .from("cart_items")
        .update({ quantity })
        .eq("cart_id", cart.id)
        .eq("product_id", productId)
        .select()
        .single()

    if (error) throw new Error(error.message)
    return data
}


// import { supabase } from "@/lib/supabaseClient"


// export const getCartProducts = async () => {
//     const { data, error } = await supabase
//         .from("cart")
//         .select("*")
//     if (error) throw new Error(error.message)
//     return data
// }

// export const addtoCart = async (productId) => {
//     const { data, error } = await supabase
//         .from("cart")
//         .insert([{ product_id: productId }])

//     if (error) throw new Error(error.message)
//     return data
// }

// export const removeProductFromCart = async (productId) => {
//     const { data, error } = await supabase
//         .from("cart")
//         .delete()
//         .eq("product_id", productId)
//     if (error) throw new Error(error.message)
//     return data
// }

// export const updateProductInCart = async (productId, quantity) => {
//     const { data, error } = await supabase
//         .from("cart")
//         .update({ quantity: quantity })
//         .eq("product_id", productId)
//     if (error) throw new Error(error.message)
//     return data
// }

