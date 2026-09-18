import {supabase} from "./supabase.js";

export const signUp=(email, senha) => 
    supabase.auth.signUp({
        email,
        password: senha
});


export const signIn =(email, senha) =>
    supabase.auth.signInWithPassword({
        email,
        password: senha
})


