import {Stack} from 'expo-router';

export default function AppLayout() {
    return(
        <Stack>
            <Stack.Screen name="home"
            options={{headerShown:false}}/>
            <Stack.Screen name="add-transaction"
            options={{title:'Nova Transação'}}/>
            <Stack.Screen name="Perfil"
            options={{title:'Usuario'}}/>
        </Stack>
    );
}