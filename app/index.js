import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
}
    from 'react-native';
//components
import AppInput from "../src/components/AppInput.js";
import AppButton from "../src/components/AppButton.js";
import {useRouter} from  "expo-router"

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
                <Text style={styles.title}>Meu Bolso</Text>
                <Text style={styles.subtitle}>Controle suas finanças</Text>
                <AppInput label="Email" placeholder="Digite seu email" autoCapitalize="none" keyboardType="email-address"
                    value={email} onChangeText={setEmail} />
                <AppInput label="Senha" secureTextEntry value={password} onChangeText={setPassword} placeholder="Digite sua senha" />
                <AppButton title="Entrar" loading={loading} />
                <TouchableOpacity>
                    <Text style={styles.link} onPress={() => router.push('/RegisterScreen')}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{

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