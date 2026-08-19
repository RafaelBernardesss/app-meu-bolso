import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
}
    from 'react-native';
//components
import AppInput from "../src/components/AppInput.js";
import AppButton from "../src/components/AppButton.js";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <Text>Meu Bolso</Text>
            <Text>Controle suas finanças</Text>
            <AppInput label="Email" placeholder="Digite seu email" autoCapitalize="none" keyboardType="email-address"
            value={email} onChangeText={setEmail} />
            <AppInput label="Senha" secureTextEntry value={password} onChangeText={setPassword} placeholder="Digite sua senha"/>
            <AppButton title="Entrar"  loading={loading} />
            <TouchableOpacity>
                <Text>Criar nova conta</Text>
            </TouchableOpacity>
        </View> 
    );
}

const styles = StyleSheet.create({

});