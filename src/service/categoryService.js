import {supabase} from "./supabase";

export function listarCategorias(){
    return supabase.from('categorias').select('*').order('nome')
}