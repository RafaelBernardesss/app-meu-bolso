import {Stack} from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="register" options={{title:'Criar Conta'}} />
        </Stack>
    )
}
