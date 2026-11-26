import { Stack } from 'expo-router';
import { AuthProvider } from '../src/context/AuthContext.js';

export default function RootLayout(){

  return <AuthProvider>
    <Stack>
   
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="register" options={{title:'Criar conta'}}/>
      <Stack.Screen name="(app)" options={{headerShown:false}}/>

    </Stack>
  </AuthProvider>;
}
