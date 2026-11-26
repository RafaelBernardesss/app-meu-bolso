// ============================================================================
// ARQUIVO: app/(app)/_layout.js  (layout das telas PROTEGIDAS)
// ----------------------------------------------------------------------------
// Tudo que está dentro da pasta "(app)" só deve ser acessado por quem está
// logado. Este arquivo funciona como um "segurança na porta": confere se existe
// sessão (login ativo) e redireciona quem não deveria estar aqui.
// ============================================================================

// useSegments: devolve as partes da rota atual. Ex.: ["(app)","home"].
import { Stack, router, useSegments } from 'expo-router';
// useEffect: executa um código DEPOIS que a tela aparece e sempre que
// algum valor da lista de dependências mudar.
import { useEffect } from 'react';
// useAuth: nosso hook que entrega { session, loading } (veja AuthContext.js).
import { useAuth } from '../../src/context/AuthContext';

export default function AppLayout(){
  // session = dados do login (ou null se ninguém logou) | loading = ainda verificando
  const {session,loading}=useAuth();
  const segments=useSegments(); // onde o usuário está agora

  // Este efeito roda quando "session", "loading" ou "segments" mudam
  // (veja a lista [session,loading,segments] no final).
  useEffect(()=>{
    // Ainda estamos descobrindo se há login? Então não decide nada por enquanto.
    if(loading)return;

    // true se a primeira parte da rota é "(app)" = o usuário está na área protegida.
    const inProtected=segments[0]==='(app)';

    // Sem login E tentando ficar na área protegida -> manda de volta ao login.
    if(!session && inProtected) router.replace('/');
    // Com login E fora da área protegida -> manda direto para a home.
    if(session && !inProtected) router.replace('/(app)/home');
  },[session,loading,segments]);

  // Enquanto verifica o login, não desenha nada (evita "piscar" a tela errada).
  if(loading)return null;

  // Cadastra as telas desta pasta na pilha de navegação.
  return <Stack>
    {/* home: sem barra de título (ela tem o próprio cabeçalho) */}
    <Stack.Screen name="home" options={{headerShown:false}}/>
    <Stack.Screen name="add-transaction" options={{title:'Nova transação'}}/>
    <Stack.Screen name="edit-transaction" options={{title:'Editar transação'}}/>
    <Stack.Screen name="profile" options={{title:'Meu perfil'}}/>
  </Stack>;
}
