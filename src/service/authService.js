import {supabase} from "./supabase.js";

export const signUp=(email, senha) => 
    supabase.auth.signUp({
        email,
        senha,
        });