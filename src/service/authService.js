import {supabase} from "./supabase";

export const signUp=(email, senha) => 
    supabase.auth.signUp({email, senha});