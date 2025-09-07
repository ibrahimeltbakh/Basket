import supabase from "../../lib/supabaseClient"

export const getCategories = async () => {
    const { data, error } = await supabase.from("categories").select("*")
    if (error) throw new Error(error.message)
    return data
}

export const getSpacificCategory = async (id) => {
    const { data, error } = await supabase.from("categories").select("*").eq("id", id).single();
    if (error) throw new Error(error.message)
    return data
}