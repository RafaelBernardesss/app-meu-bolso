// ============================================================================
// ARQUIVO: src/services/authService.js  (SERVIÇO DE AUTENTICAÇÃO)
// ----------------------------------------------------------------------------
// "Services" são arquivos que concentram a conversa com o servidor.
// Vantagem: as telas não precisam saber COMO o Supabase funciona; elas só
// chamam signIn(), signUp()... (separação de responsabilidades).
// ============================================================================

// Importa o cliente do Supabase já configurado e instanciado em outro arquivo do projeto
import { supabase } from './supabase';

// Exporta uma função assíncrona chamada 'signUp' para cadastrar um novo usuário.
// Ela recebe 'email' e 'password' como parâmetros e repassa para o método de cadastro do Supabase.
// export const signUp=(email,password)=>
//   supabase.auth.signUp({email,password});

// Exporta uma função assíncrona 'signUp' que recebe email e senha do usuário
export const signUp = async (email, password) => {
  // Faz a requisição para o Supabase criar o novo usuário na nuvem
  const { data, error } = await supabase.auth.signUp({ 
    email, 
    password 
  });

  // Retorna os dados gerados (se houver) e o erro (caso algo dê errado, ex: senha fraca)
  return { data, error };
};

// Exporta uma função para realizar o login (autenticação) do usuário existente.
// Utiliza o método 'signInWithPassword' enviando as credenciais informadas.
// (Esta é uma "arrow function" de uma linha: o resultado do Supabase é devolvido direto.)
export const signIn=(email,password)=>
  supabase.auth.signInWithPassword({email,password});

// Exporta uma função simples para deslogar (encerrar a sessão) do usuário atual.
export const signOut=()=>
  supabase.auth.signOut();

// Declara uma função assíncrona para buscar as informações do usuário que está logado no momento.
export async function getCurrentUser(){
  
  // Faz uma requisição assíncrona (await) para o Supabase buscar o usuário atual.
  // Desestrutura a resposta obtendo os objetos 'data' (dados do usuário) e 'error' (se houver falha).
  const {data,error}=await supabase.auth.getUser();
  
  // Retorna um objeto personalizado contendo:
  // 1. 'user': se 'data.user' existir, ele retorna o usuário; caso contrário (operador '??'), retorna 'null'.
  // 2. 'error': repassa o erro caso a requisição tenha falhado.
  return {user:data?.user ?? null,error};
}
