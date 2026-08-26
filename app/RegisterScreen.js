import React  from 'react';
import {useEffect, useState} from 'react'
import {
    View,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import Appinput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';
import {useRouter} from 'expo-router';




export default function Register(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoafing] = useState(false)

    const router = useRouter()


    return(
        <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS==='ios' ? 'padding': undefined}>
             <View style={styles.container}>
                <Text style={styles.title}>Registrar</Text>
                <Text style={styles.subtitle}>Controle suas finanças</Text>
                <Appinput label="Nome" placeholder="Digite seu nome"
                value={nome} onChangeText={setNome}/>
                <Appinput label="Email" placeholder="Digite seu email" autoCapitalize="none" keyboardType="email-address"
                value={email} onChangeText={setEmail}/>
                <Appinput label="Senha" secureTextEntry value={senha} onChnage={setSenha} placeholder="Digite sua senha"/>
                <AppButton title="Registrar"/>
                <TouchableOpacity>
                    <Text style={styles.link} onPress={() => router.push('/index')}>Já tem uma conta?</Text>
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
    title:{
        fontSize: 34,
        fontWeight: '900',
        color: '#2f3640',
        textAlign: 'center'
    },
    subtitle:{
        color: '#7f8c8d',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 32
    },
    link:{
        color: '#008f22',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700'
    },
});