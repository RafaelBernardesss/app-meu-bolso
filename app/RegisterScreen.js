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




export default function Register(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoafing] = useState(false)



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
             </View>
                <Appinput label="Senha" secureTextEntry value={senha} onChnage={setSenha} placeholder="Digite sua senha"/>
        </KeyboardAvoidingView>
       
    );
}

const styles = StyleSheet.create({

});