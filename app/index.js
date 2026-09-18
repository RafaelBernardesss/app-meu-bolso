import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert
}
    from 'react-native';
//components
import AppInput from "../src/components/AppInput.js";
import AppButton from "../src/components/AppButton.js";
import {useRouter} from  "expo-router";
import { signIn } from '../src/service/authService.js';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function handleLogin() {
        if(!email || !senha){
            return Alert.alert("Preencha todos os campos")
        }
        
        try{

            setLoading(true);
            const {data,error} =
            await signIn (email.trim(), senha);
            if(error){
                return Alert.alert('Erro', error.message);
                console.log('Erro', error.message);
                return;
            }

            console.log("entrando na data")
            if(data?.user){
              return  Alert.alert("Login realizado com sucesso")
               router.push('/HomeScreen')
             

            } else{
                Alert.alert("Erro", "Não foi possivel encontrar o usuario.");
            }
            

        } finally{setLoading(false)}
    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <Text style={styles.title}>Meu Bolso</Text>
                <Text style={styles.subtitle}>Controle suas finanças</Text>
                <AppInput label="Email" placeholder="Digite seu email" autoCapitalize="none" keyboardType="email-address"
                    value={email} onChangeText={setEmail} />
                <AppInput label="Senha" secureTextEntry value={senha} onChangeText={setSenha} placeholder="Digite sua senha" />
                <AppButton title="Entrar" loading={loading} onPress={handleLogin} />
                <TouchableOpacity>
                    <Text style={styles.link} onPress={() => router.push('/RegisterScreen')}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#2f3640',
        textAlign: 'center'
    },
    subtitle: {
        color: '#7f8c8d',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 32
    },
    link: {
        color: '#008f22',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700'
    }
});